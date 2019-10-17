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
      parseInt(event.target.value);
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
          id="Form__input--name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          id="Form__input--date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="time"
          id="Form__input--time"
          placeholder="Time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="number"
          id="Form__input--number"
          placeholder="Number of Guests"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="button" name="submit" id="Form__btn--submit" onClick={this.handleSubmit}>
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
