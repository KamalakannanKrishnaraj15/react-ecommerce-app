import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import Header from './index';

/* Case1: CartDropDown component is not rendered */
describe("Header Component test", () => {
  const props = {
    hidden: true
  };
  const wrapper = shallow(
    <Header.WrappedComponent {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

/* Case2: CartDropDown component is rendered */
describe("Header Component test", () => {
  const props = {
    hidden: false
  };
  const wrapper = shallow(
    <Header.WrappedComponent {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
