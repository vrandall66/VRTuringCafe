import React from "react";
import Card from "../Card/Card";
import "./Container.css";

const Container = ({ reservations }) => {
  const allReservations = reservations.map(reservation => {
    return <Card reservation={reservation} key={reservation.id} />;
  });
  return (
    <>
      <div className="Container">{allReservations}</div>
    </>
  );
};

export default Container;
