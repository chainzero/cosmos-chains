package keeper

import (
	"encoding/binary"

	"apitracking/x/apitracking/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetApitrackingCount get the total number of apitracking
func (k Keeper) GetApitrackingCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ApitrackingCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetApitrackingCount set the total number of apitracking
func (k Keeper) SetApitrackingCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ApitrackingCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendApitracking appends a apitracking in the store with a new id and update the count
func (k Keeper) AppendApitracking(
	ctx sdk.Context,
	apitracking types.Apitracking,
) uint64 {
	// Create the apitracking
	count := k.GetApitrackingCount(ctx)

	// Set the ID of the appended value
	apitracking.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApitrackingKey))
	appendedValue := k.cdc.MustMarshal(&apitracking)
	store.Set(GetApitrackingIDBytes(apitracking.Id), appendedValue)

	// Update apitracking count
	k.SetApitrackingCount(ctx, count+1)

	return count
}

// SetApitracking set a specific apitracking in the store
func (k Keeper) SetApitracking(ctx sdk.Context, apitracking types.Apitracking) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApitrackingKey))
	b := k.cdc.MustMarshal(&apitracking)
	store.Set(GetApitrackingIDBytes(apitracking.Id), b)
}

// GetApitracking returns a apitracking from its id
func (k Keeper) GetApitracking(ctx sdk.Context, id uint64) (val types.Apitracking, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApitrackingKey))
	b := store.Get(GetApitrackingIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApitracking removes a apitracking from the store
func (k Keeper) RemoveApitracking(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApitrackingKey))
	store.Delete(GetApitrackingIDBytes(id))
}

// GetAllApitracking returns all apitracking
func (k Keeper) GetAllApitracking(ctx sdk.Context) (list []types.Apitracking) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApitrackingKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Apitracking
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetApitrackingIDBytes returns the byte representation of the ID
func GetApitrackingIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetApitrackingIDFromBytes returns ID in uint64 format from a byte array
func GetApitrackingIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
