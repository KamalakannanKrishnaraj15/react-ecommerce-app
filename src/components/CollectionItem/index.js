import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ({ item, addItem }) => {
  const { name, price, image } = item;

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
        <div className="price">{price}</div>
      </div>
      <button
        onClick={() => addItem(item)}
        className="button inverted"
      >
        Add to cart
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
