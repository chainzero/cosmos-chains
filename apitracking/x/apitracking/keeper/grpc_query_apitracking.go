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

func (k Keeper) ApitrackingAll(c context.Context, req *types.QueryAllApitrackingRequest) (*types.QueryAllApitrackingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var apitrackings []types.Apitracking
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	apitrackingStore := prefix.NewStore(store, types.KeyPrefix(types.ApitrackingKey))

	pageRes, err := query.Paginate(apitrackingStore, req.Pagination, func(key []byte, value []byte) error {
		var apitracking types.Apitracking
		if err := k.cdc.Unmarshal(value, &apitracking); err != nil {
			return err
		}

		apitrackings = append(apitrackings, apitracking)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllApitrackingResponse{Apitracking: apitrackings, Pagination: pageRes}, nil
}

func (k Keeper) Apitracking(c context.Context, req *types.QueryGetApitrackingRequest) (*types.QueryGetApitrackingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	apitracking, found := k.GetApitracking(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetApitrackingResponse{Apitracking: apitracking}, nil
}
