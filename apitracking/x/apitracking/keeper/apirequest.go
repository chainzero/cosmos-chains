package keeper

import (
	"encoding/binary"

	"apitracking/x/apitracking/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetApirequestCount get the total number of apirequest
func (k Keeper) GetApirequestCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ApirequestCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetApirequestCount set the total number of apirequest
func (k Keeper) SetApirequestCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ApirequestCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendApirequest appends a apirequest in the store with a new id and update the count
func (k Keeper) AppendApirequest(
	ctx sdk.Context,
	apirequest types.Apirequest,
) uint64 {
	// Create the apirequest
	count := k.GetApirequestCount(ctx)

	// Set the ID of the appended value
	apirequest.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApirequestKey))
	appendedValue := k.cdc.MustMarshal(&apirequest)
	store.Set(GetApirequestIDBytes(apirequest.Id), appendedValue)

	// Update apirequest count
	k.SetApirequestCount(ctx, count+1)

	return count
}

// SetApirequest set a specific apirequest in the store
func (k Keeper) SetApirequest(ctx sdk.Context, apirequest types.Apirequest) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApirequestKey))
	b := k.cdc.MustMarshal(&apirequest)
	store.Set(GetApirequestIDBytes(apirequest.Id), b)
}

// GetApirequest returns a apirequest from its id
func (k Keeper) GetApirequest(ctx sdk.Context, id uint64) (val types.Apirequest, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApirequestKey))
	b := store.Get(GetApirequestIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApirequest removes a apirequest from the store
func (k Keeper) RemoveApirequest(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApirequestKey))
	store.Delete(GetApirequestIDBytes(id))
}

// GetAllApirequest returns all apirequest
func (k Keeper) GetAllApirequest(ctx sdk.Context) (list []types.Apirequest) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApirequestKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Apirequest
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetApirequestIDBytes returns the byte representation of the ID
func GetApirequestIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetApirequestIDFromBytes returns ID in uint64 format from a byte array
func GetApirequestIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
