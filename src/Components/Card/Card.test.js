import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  let wrapper;
  const deleteReservation = jest.fn();
  let reservation = {
    name: "",
    date: "",
    number: 0,
    time: "",
    id: 4
  };

  beforeEach(() => {
    wrapper = shallow(
      <Card
        reservation={reservation}
        key={reservation.id}
        deleteReservation={deleteReservation}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke deleteReservation onClick of Cancel Reservation", () => {
    wrapper.find("#Card__btn--delete").simulate("click");

    expect(deleteReservation).toHaveBeenCalled();
  });
});
