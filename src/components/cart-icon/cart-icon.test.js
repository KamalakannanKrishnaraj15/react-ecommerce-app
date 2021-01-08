import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import CartIcon from './index';

describe("App Component test", () => {
  const props = {
    toggleCartHidden: jest.fn(() => true),
    itemCount: 1,
  };
  const wrapper = shallow(
    <CartIcon.WrappedComponent {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
