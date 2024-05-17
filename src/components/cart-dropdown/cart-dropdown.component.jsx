import React from "react";
import {connect } from 'react-redux'
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";

import './cart-dropdown.component.scss';
import CustomButton from "../button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { CardDropdownComponent, CardItemsComponent, CustomCartDropdownBtn, EmptyStyle } from "./cart-dropdown.style";

const CartDropdown = ({cartItems, dispatch}) => {
        const navigate = useNavigate();
        return(
    <CardDropdownComponent>
    
    
        <CardItemsComponent>
        {
        cartItems.length ? 
            (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem  }/>)
            ): 
            ( <EmptyStyle>Your cart is empty</EmptyStyle>)}
        </CardItemsComponent> 
    
        <CustomCartDropdownBtn 
            onClick={() => {navigate('/checkout');

            dispatch(toggleCartHidden());}}>GO TO CHECKOUT</CustomCartDropdownBtn>
     </CardDropdownComponent>
)}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);