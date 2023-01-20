package keeper

import (
	"context"

	"apitracking/x/apitracking/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ApirequestAll(c context.Context, req *types.QueryAllApirequestRequest) (*types.QueryAllApirequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var apirequests []types.Apirequest
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	apirequestStore := prefix.NewStore(store, types.KeyPrefix(types.ApirequestKey))

	pageRes, err := query.Paginate(apirequestStore, req.Pagination, func(key []byte, value []byte) error {
		var apirequest types.Apirequest
		if err := k.cdc.Unmarshal(value, &apirequest); err != nil {
			return err
		}

		apirequests = append(apirequests, apirequest)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllApirequestResponse{Apirequest: apirequests, Pagination: pageRes}, nil
}

func (k Keeper) Apirequest(c context.Context, req *types.QueryGetApirequestRequest) (*types.QueryGetApirequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	apirequest, found := k.GetApirequest(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetApirequestResponse{Apirequest: apirequest}, nil
}
