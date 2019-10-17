import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form", () => {
  let wrapper;
  let newReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form newReservation={newReservation} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
