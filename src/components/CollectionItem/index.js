import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ({ item, addItem, cartItems }) => {
  const { name, price, image, description } = item;

  let buttonDisabled = false;
  let buttonDisabledClassName = "";

  if (cartItems && cartItems.length) {
    let currentItem = cartItems.filter(cartItem => cartItem.id === item.id);
    buttonDisabled = currentItem.length && currentItem[currentItem.length - 1].quantity == item.quantity;
  }
  buttonDisabledClassName = buttonDisabled ? "disabled" : "";

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <div className="price">Rs. {price}</div>
      </div>
      <button
        onClick={() => addItem(item)}
        className={`button inverted ${buttonDisabledClassName}`}
        disabled={buttonDisabled}
      >
        Add to cart
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
