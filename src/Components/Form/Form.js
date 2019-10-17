import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    };
  }

  handleChange = event => {
    if (event.target.name === "number") {
      return parseInt(event.target.value);
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const newReservation = { ...this.state, id: Date.now() };
    return this.props.newReservation(newReservation);
  };

  render() {
    return (
      <form className="Form>">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="number"
          placeholder="Number of Guests"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="button" name="submit" onClick={this.handleSubmit}>
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
