import React from "react";
import Card from "../Card/Card";
import "./Container.css";

const Container = ({ reservations, deleteReservation }) => {
  const allReservations = reservations.map(reservation => {
    return (
      <Card
        reservation={reservation}
        deleteReservation={deleteReservation}
        key={reservation.id}
      />
    );
  });
  return (
    <>
      <div className="Container">{allReservations}</div>
    </>
  );
};

export default Container;
