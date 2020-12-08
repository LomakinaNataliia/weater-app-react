import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

import FormattedDate from "./FormattedDate";
import Search from "./Search";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      date:new Date(response.data.dt * 1000),
      city:response.data.name,
      iconUrl:'https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png',
      description:response.data.weather[0].description,
      temperature:response.data.main.temp,
      feelsLike:response.data.main.feels_like,
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
    });
  }


  if (weatherData.ready) {
  return (
    <div className="container">
      <div className="card-back">
        <Search />
        <div className="last-updated">
          Last updated on <FormattedDate date={weatherData.date} />   
        </div>          
        <div className="card-body">
          <h1 className="city">{weatherData.city}</h1>
          <p className="description">{weatherData.description}</p>
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            width="60px"
          />

          <div className="row">
            <div className="col block">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
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
                Feels like: {Math.round(weatherData.feelsLike)} °C
              </p>
              <p>
                Humidity: {weatherData.humidity} %<br />
                Wind: {weatherData.wind} km/h
              </p>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    </div>
  );
    
  } else {
  const apiKey = `df6d0c618d1d938dbbaf07dbd577f2e4`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}`;
  axios.get(`${apiUrl}&units=${units}&appid=${apiKey}`).then(handleResponse);

  return "Loading...";
  }
  
}
  // forecastApiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}`;
  // axios.get(`${forecastApiUrl}&units=${units}&appid=${apiKey}`).then(displayForecast);