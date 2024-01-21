import React from "react";

import './cart-dropdown.component.scss';
import CustomButton from "../button/custom-button.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;