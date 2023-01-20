package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ApirequestList: []Apirequest{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in apirequest
	apirequestIdMap := make(map[uint64]bool)
	apirequestCount := gs.GetApirequestCount()
	for _, elem := range gs.ApirequestList {
		if _, ok := apirequestIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for apirequest")
		}
		if elem.Id >= apirequestCount {
			return fmt.Errorf("apirequest id should be lower or equal than the last id")
		}
		apirequestIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
