package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ApitrackingList: []Apitracking{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in apitracking
	apitrackingIdMap := make(map[uint64]bool)
	apitrackingCount := gs.GetApitrackingCount()
	for _, elem := range gs.ApitrackingList {
		if _, ok := apitrackingIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for apitracking")
		}
		if elem.Id >= apitrackingCount {
			return fmt.Errorf("apitracking id should be lower or equal than the last id")
		}
		apitrackingIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
