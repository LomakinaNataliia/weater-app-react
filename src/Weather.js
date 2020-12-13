import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

// import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      date:new Date(response.data.dt * 1000),
      city:response.data.name,
      icon:response.data.weather[0].icon,
      description:response.data.weather[0].description,
      temperature:response.data.main.temp,
      feelsLike:response.data.main.feels_like,
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
    });
  }

  function searchCity() {  
    const apiKey = `df6d0c618d1d938dbbaf07dbd577f2e4`;  
    let units = `metric`;  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;  
    axios.get(`${apiUrl}&units=${units}&appid=${apiKey}`).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
  return (
    <div className="container">
      <div className="card-back">
        {/* <Search /> */}
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={updateCity}
        className="search-engine"
        placeholder="Enter Your City"
        autoFocus={true}
        autoComplete="false"
      />
      <input type="submit" value="Search" className="search-button" />
      <input
        type="submit"
        value="Search By Location 🗺"
        className="search-button"
      />
    </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city}/>
      </div>
    </div>
  );
    
  } else {
    searchCity();  
    return "Loading...";
  }
  
}
 