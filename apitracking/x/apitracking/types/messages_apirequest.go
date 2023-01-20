package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateApirequest = "create_apirequest"
	TypeMsgUpdateApirequest = "update_apirequest"
	TypeMsgDeleteApirequest = "delete_apirequest"
)

var _ sdk.Msg = &MsgCreateApirequest{}

func NewMsgCreateApirequest(creator string, requestor string, uri string, datetime string) *MsgCreateApirequest {
	return &MsgCreateApirequest{
		Creator:   creator,
		Requestor: requestor,
		Uri:       uri,
		Datetime:  datetime,
	}
}

func (msg *MsgCreateApirequest) Route() string {
	return RouterKey
}

func (msg *MsgCreateApirequest) Type() string {
	return TypeMsgCreateApirequest
}

func (msg *MsgCreateApirequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateApirequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateApirequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateApirequest{}

func NewMsgUpdateApirequest(creator string, id uint64, requestor string, uri string, datetime string) *MsgUpdateApirequest {
	return &MsgUpdateApirequest{
		Id:        id,
		Creator:   creator,
		Requestor: requestor,
		Uri:       uri,
		Datetime:  datetime,
	}
}

func (msg *MsgUpdateApirequest) Route() string {
	return RouterKey
}

func (msg *MsgUpdateApirequest) Type() string {
	return TypeMsgUpdateApirequest
}

func (msg *MsgUpdateApirequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateApirequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateApirequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteApirequest{}

func NewMsgDeleteApirequest(creator string, id uint64) *MsgDeleteApirequest {
	return &MsgDeleteApirequest{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteApirequest) Route() string {
	return RouterKey
}

func (msg *MsgDeleteApirequest) Type() string {
	return TypeMsgDeleteApirequest
}

func (msg *MsgDeleteApirequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteApirequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteApirequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
