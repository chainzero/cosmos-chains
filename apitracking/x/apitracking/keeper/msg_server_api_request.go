package keeper

import (
	"context"

	"apitracking/x/apitracking/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ApiRequest(goCtx context.Context, msg *types.MsgApiRequest) (*types.MsgApiRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Create a new Apirequest with the following user input
	var apirequest = types.Apirequest{
		Requestor: msg.Requestor,
		Uri:       msg.Uri,
		Datetime:  msg.Datetime,
		Creator:   msg.Creator,
	}

	// Add the apirequest to the keeper
	k.AppendApirequest(
		ctx,
		apirequest,
	)

	return &types.MsgApiRequestResponse{}, nil
}
