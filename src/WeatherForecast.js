import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const[loaded,setLoaded]=useState(false);
  const [forecast,setForecast]=useState(null);

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data);    
  }

  if (loaded){
    return (
    <div className="row">
      <div className="col-3">
        <h6>
          {new Date (forecast.list[0].dt *1000).getHours()}
        </h6>
        <WeatherIcon code={forecast.list[0].weather[0].icon} />
        <p>
          {Math.round(forecast.list[0].main.temp_max)}⁰ |{" "}
          {Math.round(forecast.list[0].main.temp_min)}⁰
        </p>
      </div>
    </div>
  );  
    
  } else {
    const apiKey = `df6d0c618d1d938dbbaf07dbd577f2e4`;  
    let units = `metric`;
    let ApiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}`;
    axios.get(`${ApiUrl}&units=${units}&appid=${apiKey}`).then(displayForecast);
    return null;
  }

}
