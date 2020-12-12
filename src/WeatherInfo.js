import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <WeatherTemperature celsius={props.data.temperature}/>
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