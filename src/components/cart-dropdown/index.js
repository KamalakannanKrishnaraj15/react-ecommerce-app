import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/index";
import { selectCartItems, selectCartItemsCount } from "../../redux/cart/cart.selectors";


const CartDropdown = ({ cartItems, totalQuantity }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      {
        cartItems.length ? (
          <div className="total-items">Total: <span>{totalQuantity}</span> </div>
        ) : null
      }
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalQuantity: selectCartItemsCount
});

export default connect(mapStateToProps)(CartDropdown);
