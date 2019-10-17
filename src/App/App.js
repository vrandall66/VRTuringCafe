import React, { Component } from "react";
import Container from "../Components/Container/Container";
import Form from "../Components/Form/Form";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount = async () => {
    this.getAllReservations();
  };

  getAllReservations = () => {
    return fetch("http://localhost:3001/api/v1/reservations").then(response => {
      if (!response.ok) {
        throw Error("Error fetching reservations, please try again later.");
      }
      return response
        .json()
        .then(reservations => this.setState({ reservations: reservations }));
    });
  };

  newReservation = newReservation => {
    this.setState({
      reservations: [...this.state.reservations, newReservation]
    });
    const options = {
      method: "POST",
      body: JSON.stringify(newReservation),
      headers: {
        "Content-Type": "application/json"
      }
    };
    return fetch("http://localhost:3001/api/v1/reservations", options).then(
      response => response.json()
    );
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form newReservation={this.newReservation} />
        </div>
        <div className="resy-container">
          <Container reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}
