import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = collectionURLParam => 
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionURLParam] : null)
    )