import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import CollectionItem from './index';


/* Case 1: Add to cart button enabled since cart item quantity is less than max quantity */
describe("App Component test", () => {
  const props = {
    item: {
      image: "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg",
      name: "Product 2",
      price: "130.00",
      quantity: 12
    },
    cartItems: [
      {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
        id: 2,
        image: "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg",
        name: "Product 2",
        price: "130.00",
        quantity: 1
      }
    ]
  };
  const wrapper = shallow(
    <CollectionItem.WrappedComponent {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

/* Case 2: Add to cart button disabled since cart item quantity reached the max quantity */


describe("App Component test", () => {
  const props = {
    item: {
      image: "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg",
      name: "Product 2",
      price: "130.00",
      quantity: 12
    },
    cartItems: [
      {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
        id: 2,
        image: "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg",
        name: "Product 2",
        price: "130.00",
        quantity: 12
      }
    ]
  };
  const wrapper = shallow(
    <CollectionItem.WrappedComponent {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});