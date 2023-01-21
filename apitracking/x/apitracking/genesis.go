package apitracking

import (
	"apitracking/x/apitracking/keeper"
	"apitracking/x/apitracking/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the apitracking
	for _, elem := range genState.ApitrackingList {
		k.SetApitracking(ctx, elem)
	}

	// Set apitracking count
	k.SetApitrackingCount(ctx, genState.ApitrackingCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ApitrackingList = k.GetAllApitracking(ctx)
	genesis.ApitrackingCount = k.GetApitrackingCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
