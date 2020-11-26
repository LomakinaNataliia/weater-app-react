import React from "react";
import "./Content.css";

import Search from "./Search";
import Date from "./Date";
import Today from "./Today";
import Forecast from "./Forecast";

export default function Content() {
  return (
    <div className="container">
      <div className="card-back">
        <Search />
        <Date />
        <Today />
        <Forecast />
      </div>
    </div>
  );
}