package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgApiRequest = "api_request"

var _ sdk.Msg = &MsgApiRequest{}

func NewMsgApiRequest(creator string, requestor string, uri string, datetime string) *MsgApiRequest {
	return &MsgApiRequest{
		Creator:   creator,
		Requestor: requestor,
		Uri:       uri,
		Datetime:  datetime,
	}
}

func (msg *MsgApiRequest) Route() string {
	return RouterKey
}

func (msg *MsgApiRequest) Type() string {
	return TypeMsgApiRequest
}

func (msg *MsgApiRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgApiRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgApiRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
