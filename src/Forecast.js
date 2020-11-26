import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row" id="forecast">
      <div className="col-3">
        <h6 className="forecast" id="forecast-time">
          12:00
        </h6>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png"
          alt="weather icon"
          className="forecast-icon"
          id="forecast-icon"
        />
        <p className="forecast">
          <strong id="forecast-max">18</strong>⁰ |{" "}
          <span id="forecast-min">15</span>⁰
        </p>
      </div>
      <div className="col-3">
        <h6 className="forecast" id="forecast-time">
          12:00
        </h6>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png"
          alt="weather icon"
          className="forecast-icon"
          id="forecast-icon"
        />
        <p className="forecast">
          <strong id="forecast-max">18</strong>⁰ |{" "}
          <span id="forecast-min">15</span>⁰
        </p>
      </div>
      <div className="col-3">
        <h6 className="forecast" id="forecast-time">
          12:00
        </h6>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png"
          alt="weather icon"
          className="forecast-icon"
          id="forecast-icon"
        />
        <p className="forecast">
          <strong id="forecast-max">18</strong>⁰ |{" "}
          <span id="forecast-min">15</span>⁰
        </p>
      </div>
      <div className="col-3">
        <h6 className="forecast" id="forecast-time">
          12:00
        </h6>
        <img
          src="https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png"
          alt="weather icon"
          className="forecast-icon"
          id="forecast-icon"
        />
        <p className="forecast">
          <strong id="forecast-max">18</strong>⁰ |{" "}
          <span id="forecast-min">15</span>⁰
        </p>
      </div>
    </div>
  );
}
