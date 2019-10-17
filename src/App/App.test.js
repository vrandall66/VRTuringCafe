import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state without the cancelled reservation", () => {
    const cancelledReservation = {
      name: "Robbie",
      date: "10/17",
      time: "12:00PM",
      number: 2,
      id: 60
    };
    const otherReservation = {
      name: "Travis",
      date: "10/18",
      time: "12:30PM",
      number: 4,
      id: 61
    };
    const reservations = [cancelledReservation, otherReservation];
    wrapper.instance().setState({ reservations: reservations });
    wrapper.instance().deleteReservation(cancelledReservation.id);
    expect(wrapper.state("reservations")).toEqual([otherReservation]);
  });
});
