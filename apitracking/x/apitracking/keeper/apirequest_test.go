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

func createNApirequest(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Apirequest {
	items := make([]types.Apirequest, n)
	for i := range items {
		items[i].Id = keeper.AppendApirequest(ctx, items[i])
	}
	return items
}

func TestApirequestGet(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApirequest(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetApirequest(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestApirequestRemove(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApirequest(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveApirequest(ctx, item.Id)
		_, found := keeper.GetApirequest(ctx, item.Id)
		require.False(t, found)
	}
}

func TestApirequestGetAll(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApirequest(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllApirequest(ctx)),
	)
}

func TestApirequestCount(t *testing.T) {
	keeper, ctx := keepertest.ApitrackingKeeper(t)
	items := createNApirequest(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetApirequestCount(ctx))
}
