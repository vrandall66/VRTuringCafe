import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  let wrapper;
  let reservation = {
    name: "",
    date: "",
    number: 0,
    time: "",
    id: 4
  };

  beforeEach(() => {
    wrapper = shallow(<Card reservation={reservation} key={reservation.id} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
