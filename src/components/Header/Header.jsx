import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import CartIcon from "../CartIcon/CartIcon";

import  { ReactComponent as Logo } from "../../assets/crown.svg";

import './Header.scss'
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ( { currentUser, hidden }) => (
    <div className='header'>
        <h1>E-Stuffing</h1>

        <Link className='logo-container' to= '/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
           <Link className='option'  to= '/shop'> SHOP </Link>
           <Link className='option'  to= '/shop'> CONTACT </Link>
            {
               currentUser ? (
                   <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
               ) : (<Link className='option'  to= '/signin'> SIGN IN </Link>)
            }
            <CartIcon />
        </div>
        { !hidden ? <CartDropDown /> : null }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);