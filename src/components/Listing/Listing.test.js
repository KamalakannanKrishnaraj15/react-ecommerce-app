import React from "react";

import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import Listing from './index';

describe("Listing Component test", () => {
  const props = {
    products: [
      {
        "id": 1,
        "name": "Product 1",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
        "price": "100.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      },
      {
        "id": 2,
        "name": "Product 2",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
        "price": "130.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      },
      {
        "id": 3,
        "name": "Product 3",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        "price": "250.00",
        "quantity": "3",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      },
    ]
  };
  const wrapper = shallow(
    <Listing.WrappedComponent {...props}/>
  );
  it("to match snapshot when markup is mounted", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
