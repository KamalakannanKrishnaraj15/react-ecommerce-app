import React from "react";
import { connect } from "react-redux";

import { GridContainer, GridRow, GridColumn } from "arv-reactcomponents";

import CollectionItem from "../collection-item/index";

const Listing = (props) => {
  const { products } = props;

  return (
    <GridContainer>
      <GridRow>
        {
          products.map(item => (
            <GridColumn key={item.id} className="nwc-grid-col-xs nwc-grid-col-sm nwc-grid-col-md-3 products">
              <CollectionItem key={item.id} item={item} />
            </GridColumn>
          ))
        }
      </GridRow>
    </GridContainer>
  );
}

const mapStateToProps = state => ({
  products: state.shop.products,
});

export default connect(mapStateToProps)(Listing);
