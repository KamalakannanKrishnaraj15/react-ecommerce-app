import React, { useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import Header from "./components/Header/index";
import Listing from "./components/Listing/index";

import { setProductsData } from "./redux/shop/shop.actions";


function App(props) {
  // To mimic the componentDidMount lifecycle method
  useEffect(() => {
    fetch('https://run.mocky.io/v3/aea5d98a-654d-4423-bd99-6fbb90843730')
      .then(response => {
        return response.json()
      })
      .then(products => {
        const result = products && products.data && products.data.length && products.data;
        props.setProductsData(result);
      })
  },[]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = "/" component={Listing} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setProductsData: products => dispatch(setProductsData(products))
});

export default connect(null, mapDispatchToProps)(App);
