import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const[loaded,setLoaded]=useState(false);
  const [forecast,setForecast]=useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true); 
  }

  if (loaded  && props.city===forecast.city.name){
    return (
    <div className="forecast row">  
      <WeatherForecastPreview data={forecast.list[0]}/>
      <WeatherForecastPreview data={forecast.list[1]}/>   
      <WeatherForecastPreview data={forecast.list[2]}/>
      <WeatherForecastPreview data={forecast.list[3]}/>
      <WeatherForecastPreview data={forecast.list[5]}/>             
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
