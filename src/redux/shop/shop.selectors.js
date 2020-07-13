import { createSelector } from "reselect";

const selectionShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectionShop],
    shop => shop.collections
);