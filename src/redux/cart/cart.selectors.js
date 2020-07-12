import { createSelector } from 'reselect';

// input selector: is a function select<Name>
const selectCart = state => state.cart;

// output selector
// Note: second argument is a  function that returns the value we want out of the selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedItems, item) => accumulatedItems + item.quantity, 0)
);