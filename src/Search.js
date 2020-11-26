import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    alert(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
  );
}
