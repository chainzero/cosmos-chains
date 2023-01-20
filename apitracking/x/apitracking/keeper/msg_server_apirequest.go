package keeper

import (
	"context"
	"fmt"

	"apitracking/x/apitracking/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateApirequest(goCtx context.Context, msg *types.MsgCreateApirequest) (*types.MsgCreateApirequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var apirequest = types.Apirequest{
		Creator:   msg.Creator,
		Requestor: msg.Requestor,
		Uri:       msg.Uri,
		Datetime:  msg.Datetime,
	}

	id := k.AppendApirequest(
		ctx,
		apirequest,
	)

	return &types.MsgCreateApirequestResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateApirequest(goCtx context.Context, msg *types.MsgUpdateApirequest) (*types.MsgUpdateApirequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var apirequest = types.Apirequest{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Requestor: msg.Requestor,
		Uri:       msg.Uri,
		Datetime:  msg.Datetime,
	}

	// Checks that the element exists
	val, found := k.GetApirequest(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetApirequest(ctx, apirequest)

	return &types.MsgUpdateApirequestResponse{}, nil
}

func (k msgServer) DeleteApirequest(goCtx context.Context, msg *types.MsgDeleteApirequest) (*types.MsgDeleteApirequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetApirequest(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveApirequest(ctx, msg.Id)

	return &types.MsgDeleteApirequestResponse{}, nil
}
