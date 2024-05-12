import { createSelector } from "reselect";
import { COLLECTION_ID_MAP } from "./collection.data";



const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector ( 
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionURLParam => 
    createSelector(
        [selectCollections],
        collections => collections[COLLECTION_ID_MAP[collectionURLParam]]
    )