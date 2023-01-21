package apitracking_test

import (
	"testing"

	keepertest "apitracking/testutil/keeper"
	"apitracking/testutil/nullify"
	"apitracking/x/apitracking"
	"apitracking/x/apitracking/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ApitrackingList: []types.Apitracking{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ApitrackingCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ApitrackingKeeper(t)
	apitracking.InitGenesis(ctx, *k, genesisState)
	got := apitracking.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ApitrackingList, got.ApitrackingList)
	require.Equal(t, genesisState.ApitrackingCount, got.ApitrackingCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
