import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props){
    return (
      <div>
        <div className="last-updated">
          Last updated on <FormattedDate date={props.data.date} />   
        </div>          
        <div className="card-body">
          <h1 className="city">{props.data.city}</h1>
          <p className="description">{props.data.description}</p>
          <WeatherIcon code={props.data.icon}
            alt={props.data.description} />
          <div className="row">
            <div className="col block">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">
                <a
                  href="/"
                  className="celsius-link active"         
                >
                  °C
                </a>
                  |
                <a
                  href="/"
                  className="fahrenheit-link"
                >
                  °F
                </a>
              </span>
            </div>

            <div className="col block right-block">
              <p className="feels-like">
                Feels like: {Math.round(props.data.feelsLike)} °C
              </p>
              <p>
                Humidity: {props.data.humidity} %<br />
                Wind: {props.data.wind} km/h
              </p>
            </div>
          </div>
        </div>
      </div>
        
    );
}