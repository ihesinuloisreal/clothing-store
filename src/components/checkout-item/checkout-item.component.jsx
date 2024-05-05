import React from "react";
import { connect } from "react-redux";
import { deleteFromCart } from "../../redux/cart/cart.actions";
// import { createStructuredSelector } from "reselect";

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem, deleteItem}) => {
    const { name, imageUrl, price, quantity} = cartItem
    return(

    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Item" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>deleteItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);