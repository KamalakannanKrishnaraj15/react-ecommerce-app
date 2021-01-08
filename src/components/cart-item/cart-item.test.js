import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import CartItem from './index';

describe("App Component test", () => {
  const props = {
    item: {
      image: "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg",
      name: "Product 2",
      price: "130.00",
      quantity: 1
    }
  };
  const wrapper = shallow(
    <CartItem {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
