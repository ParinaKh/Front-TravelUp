import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const addActivity = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log("i have been submitted");

    // axios
    //   .post(process.env.REACT_APP_BACKEND_URL + "/itinerary-planner", formValues)
    //   .then(res => {
    //     props.history.push("/itinerary-planner");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const handleChange = e => {
    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Activities</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          placeholder="Name"
        />
        <label htmlFor="BookingRef">Booking Reference</label>
        <input type="text" name="BookingRef" placeholder="BookingRef" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default addActivity;