import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/AllmyItineraries.css";

export default function OneItinerary(props) {
  const [oneItinerary, setOneItinerary] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/itinerary/${props.match.params.id}`,
        { withCredentials: true }
      )

      .then(apiRes => {
        console.log(apiRes, "hello one itinerary");
        setOneItinerary(apiRes.data);
        console.log(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
    return () => {};
  }, []);
  if (oneItinerary === null) return null;
  return (
    <div className="one-itinerary-container">
      <div className="one-itinerary">
        <img src={oneItinerary.itineraryImage}></img>
        <div>
          <h1>{oneItinerary.title}</h1>
          <p className="description-one-card">{oneItinerary.description}</p>
          <p>{oneItinerary.startDate}</p>
          <p>{oneItinerary.endDate}</p>
          {oneItinerary.steps.map((oneStep, i) => (
            <div key={i}>{oneStep.city}</div>
          ))}
          <Link to={`/itinerary/${oneItinerary._id}`} className="link-update">
            <p>Update Itinerary</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
