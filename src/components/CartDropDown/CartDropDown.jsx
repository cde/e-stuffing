import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

import './CartDropDown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    const handleOnClick=()=> {
        history.push('/checkout')
        dispatch(toggleCartHidden());
    }
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>

                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                ) : (<span className='empty-message'> Your cart is empty </span>)
                }
            </div>
            <CustomButton onClick={ handleOnClick } type='submit'> GO TO CHECKOUT </CustomButton>
        </div>
    )
};

const mapStateToProps = ( state )=> ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));