import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import CartDropdown from './index';

/* Case 1: User-Cart has products then dropdown component should render the cartItems*/
describe("CartDropdown Component test", () => {
  const props = {
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
    <CartDropdown.WrappedComponent {...props} />
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

/* Case 2: User-Cart has no products then dropdown component should render empty-message*/
describe("CartDropdown Component test", () => {
  const props = {
    cartItems: []
  };
  const wrapper = shallow(
    <CartDropdown.WrappedComponent {...props} />
  );
  it("Renders the empty messgae component", () => {
    const CartDropDownWrapper = wrapper.find(".empty-message");
    expect(CartDropDownWrapper).toBeDefined();
  });
});