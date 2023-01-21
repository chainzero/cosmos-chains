package keeper_test

import (
	"testing"

	keepertest "apitracking/testutil/keeper"
	"apitracking/testutil/nullify"
	"apitracking/x/apitracking/keeper"
	"apitracking/x/apitracking/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNApitracking(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Apitracking {
	items := make([]types.Apitracking, n)
	for i := range items {
		items[i].Id = keeper.AppendApitracking(ctx, items[i])
	}
	return items
}

func TestApitrackingGet(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApitracking(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetApitracking(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestApitrackingRemove(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApitracking(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveApitracking(ctx, item.Id)
		_, found := keeper.GetApitracking(ctx, item.Id)
		require.False(t, found)
	}
}

func TestApitrackingGetAll(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApitracking(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllApitracking(ctx)),
	)
}

func TestApitrackingCount(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApitracking(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetApitrackingCount(ctx))
}
