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

		ApirequestList: []types.Apirequest{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ApirequestCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ApitrackingKeeper(t)
	apitracking.InitGenesis(ctx, *k, genesisState)
	got := apitracking.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ApirequestList, got.ApirequestList)
	require.Equal(t, genesisState.ApirequestCount, got.ApirequestCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
