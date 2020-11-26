import React from "react";
import "./Today.css";

import TodayInfo from "./TodayInfo";

export default function Today() {
  return (
    <div className="card-body">
      <h1 id="city">Kyiv</h1>
      <p className="description" id="description">
        Few clouds
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gnome-weather-few-clouds.svg/1024px-Gnome-weather-few-clouds.svg.png"
        alt="weather icon"
        id="main-icon"
        width="60px"
      />
      <TodayInfo />
    </div>
  );
}
