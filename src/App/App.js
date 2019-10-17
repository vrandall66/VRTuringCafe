import React, { Component } from "react";
import Container from "../Components/Container/Container";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    this.getAllReservations();
  }

  getAllReservations() {
    return fetch("http://localhost:3001/api/v1/reservations").then(response => {
      if (!response.ok) {
        throw Error("Error fetching reservations, please try again later.");
      }
      return response
        .json()
        .then(reservations => this.setState({ reservations: reservations }));
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <div className="resy-container">
          <Container reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
