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

  it("should update state", () => {
    const mockEvent1 = {
      target: {
        name: "name",
        value: "Robbie"
      }
    };
    const mockEvent2 = {
      target: {
        name: "date",
        value: "10/17"
      }
    };
    const mockEvent3 = {
      target: {
        name: "time",
        value: "12:00PM"
      }
    };
    const mockEvent4 = {
      target: {
        name: "number",
        value: 2
      }
    };

    const expected = {
      name: "Robbie",
      date: "10/17",
      time: "12:00PM",
      number: 2
    };

    wrapper.instance().handleChange(mockEvent1);
    wrapper.instance().handleChange(mockEvent2);
    wrapper.instance().handleChange(mockEvent3);
    wrapper.instance().handleChange(mockEvent4);

    expect(wrapper.state()).toEqual(expected);
  });

  it("should invoke handleSubmit onClick of submit button", () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find("#Form__btn--submit").simulate("click");
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  // it('should invoke handleChange onChange of inputs', () => {
  //   wrapper.instance().handleChange = jest.fn();
  //   wrapper.instance().forceUpdate();
  //   wrapper.find("#Form__input--date").simulate("keydown")
  //   expect(wrapper.instance().handleChange).toHaveBeenCalled();
  // })
});
