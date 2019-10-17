import React from "react";
import "./Card.css";

const Card = ({ reservation, deleteReservation }) => {
  return (
    <div className="Card" key={reservation.id}>
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>Number of guests: {reservation.number}</p>
      <p>{reservation.time}</p>
      <button
        type="button"
        id="Card__btn--delete"
        onClick={() => deleteReservation(reservation.id)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Card;
