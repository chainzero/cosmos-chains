package apitracking

import (
	"apitracking/x/apitracking/keeper"
	"apitracking/x/apitracking/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the apirequest
	for _, elem := range genState.ApirequestList {
		k.SetApirequest(ctx, elem)
	}

	// Set apirequest count
	k.SetApirequestCount(ctx, genState.ApirequestCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ApirequestList = k.GetAllApirequest(ctx)
	genesis.ApirequestCount = k.GetApirequestCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
