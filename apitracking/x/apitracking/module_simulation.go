package apitracking

import (
	"math/rand"

	"apitracking/testutil/sample"
	apitrackingsimulation "apitracking/x/apitracking/simulation"
	"apitracking/x/apitracking/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = apitrackingsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateApirequest = "op_weight_msg_apirequest"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateApirequest int = 100

	opWeightMsgUpdateApirequest = "op_weight_msg_apirequest"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateApirequest int = 100

	opWeightMsgDeleteApirequest = "op_weight_msg_apirequest"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteApirequest int = 100

	opWeightMsgApiRequest = "op_weight_msg_api_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApiRequest int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	apitrackingGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ApirequestList: []types.Apirequest{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ApirequestCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&apitrackingGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateApirequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateApirequest, &weightMsgCreateApirequest, nil,
		func(_ *rand.Rand) {
			weightMsgCreateApirequest = defaultWeightMsgCreateApirequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateApirequest,
		apitrackingsimulation.SimulateMsgCreateApirequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateApirequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateApirequest, &weightMsgUpdateApirequest, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateApirequest = defaultWeightMsgUpdateApirequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateApirequest,
		apitrackingsimulation.SimulateMsgUpdateApirequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteApirequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteApirequest, &weightMsgDeleteApirequest, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteApirequest = defaultWeightMsgDeleteApirequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteApirequest,
		apitrackingsimulation.SimulateMsgDeleteApirequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApiRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgApiRequest, &weightMsgApiRequest, nil,
		func(_ *rand.Rand) {
			weightMsgApiRequest = defaultWeightMsgApiRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApiRequest,
		apitrackingsimulation.SimulateMsgApiRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
