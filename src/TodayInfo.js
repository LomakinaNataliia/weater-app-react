import React from "react";
import "./TodayInfo.css";

export default function Today() {
  return (
    <div className="row">
      <div className="col block">
        <span className="temperature" id="temperature">
          17
        </span>
        <span className="units">
          <a
            href="https://49t5m.csb.app/"
            className="celsius-link active"
            id="celsius-link"
          >
            °C
          </a>
          |
          <a
            href="https://49t5m.csb.app/"
            className="fahrenheit-link"
            id="fahrenheit-link"
          >
            °F
          </a>
        </span>
      </div>

      <div className="col block right-block">
        <p className="feels-like">
          Feels like: 15 <span id="feels-like"></span> °C
        </p>
        <p>
          Humidity: 87<span id="humidity"></span>% <br />
          Wind: 4<span id="wind"></span> km/h
        </p>
      </div>
    </div>
  );
}
