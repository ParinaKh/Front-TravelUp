import React, { useState, useEffect } from "react";
import APIHandler from "./../api/ApiHandler";
import { withRouter } from "react-router-dom";
import "../Styles/ItineraryPlanner.css";
import axios from "axios";

function Accomodation({ itinerary, stepCount, setItinerary, creationClbk }) {
  const [accomodation, setAccomodation] = useState({
    name: "foo",
    address: "1 rue fake",
    bookingRef: "12345",
    checkIn: Date.now(),
    checkOut: ""
  });

  function handleChange(e, i) {
    setAccomodation({
      ...accomodation,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    APIHandler.post(
      "/accomodation/" + itinerary._id + "/" + itinerary.steps[stepCount]._id,
      accomodation
    )
      .then(res => {
        console.log("itinerary", res.data);
        creationClbk(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Accomodation</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="name" className="accomodation-name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={accomodation.name}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Address"
          defaultValue={accomodation.address}
        />
        <label htmlFor="BookingRef">Booking Reference</label>
        <input
          type="text"
          name="bookingRef"
          placeholder="BookingRef"
          defaultValue={accomodation.bookingRef}
        />
        <label htmlFor="checkIn">Check-in</label>
        <input
          type="date"
          name="checkIn"
          placeholder="date"
          defaultValue={accomodation.checkIn}
        />
        <label htmlFor="checkOut">Check-out</label>
        <input
          type="date"
          name="checkOut"
          placeholder="date"
          defaultValue={accomodation.checkOut}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default withRouter(Accomodation);
