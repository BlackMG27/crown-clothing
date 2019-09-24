import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const selectCollections = createSelector([shopSelect], shop => shop.collections)

export const selectCollection = collectionUrlParam => createSelector([selectCollections], collections => collections[collectionUrlParam])

export const selectCollectionsForPreview = createSelector([selectCollections], collections => Object.keys(collections).map(key => collections[key]))