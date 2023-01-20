package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateApirequest{}, "apitracking/CreateApirequest", nil)
	cdc.RegisterConcrete(&MsgUpdateApirequest{}, "apitracking/UpdateApirequest", nil)
	cdc.RegisterConcrete(&MsgDeleteApirequest{}, "apitracking/DeleteApirequest", nil)
	cdc.RegisterConcrete(&MsgApiRequest{}, "apitracking/ApiRequest", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateApirequest{},
		&MsgUpdateApirequest{},
		&MsgDeleteApirequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApiRequest{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
