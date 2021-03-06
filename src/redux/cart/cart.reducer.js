import {TOGGLE_CART_HIDDEN, ADD_ITEM,REMOVE_ITEM, CLEAR_ITEM_FROM_CART} from './cart.types'
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "./cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, payload)
            }

        default:
            return state;
    }

};

export default cartReducer;