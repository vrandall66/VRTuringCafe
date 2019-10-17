import React from "react";
import "./Card.css";

const Card = ({ reservation }) => {
  return (
    <div className="Card" key={reservation.id}>
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>Number of guests: {reservation.number}</p>
      <p>{reservation.time}</p>
      <button type="button">Cancel</button>
    </div>
  );
};

export default Card;
