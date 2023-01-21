package types_test

import (
	"testing"

	"apitracking/x/apitracking/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				ApitrackingList: []types.Apitracking{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				ApitrackingCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated apitracking",
			genState: &types.GenesisState{
				ApitrackingList: []types.Apitracking{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid apitracking count",
			genState: &types.GenesisState{
				ApitrackingList: []types.Apitracking{
					{
						Id: 1,
					},
				},
				ApitrackingCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
