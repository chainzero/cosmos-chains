package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"apitracking/x/apitracking/types"
)

func TestApirequestMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateApirequest(ctx, &types.MsgCreateApirequest{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestApirequestMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateApirequest
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateApirequest{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateApirequest{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateApirequest{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateApirequest(ctx, &types.MsgCreateApirequest{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateApirequest(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestApirequestMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteApirequest
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteApirequest{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteApirequest{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteApirequest{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateApirequest(ctx, &types.MsgCreateApirequest{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteApirequest(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
