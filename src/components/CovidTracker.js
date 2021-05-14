import React, { useEffect, useState } from "react";
import "./CovidTracker.css";

const CovidTracker = () => {
  const [state, setState] = useState("");
  const covidUpdate = async () => {
    const res = await fetch("https://corona.lmao.ninja/v2/countries/nepal");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setState(data);
  };
  useEffect(() => {
    covidUpdate();
  }, []);
  return (
    <>
      <h1 className="heading">Covid-19 UPDATE</h1>
      <div className="container">
        <div className="card">
          <div className="card1">
            <h2>Nepal</h2>
            <h2>Live Update</h2>
          </div>

          <div className="card2">
            <h3>Total Cases</h3>
            <h1>{state.cases}</h1>
          </div>

          <div className="card3">
            <h3>Total Deaths</h3>
            <h1>{state.deaths}</h1>
          </div>

          <div className="card4">
            <h3>Total Recovered</h3>
            <h1>{state.recovered}</h1>
          </div>

          <div className="card5">
            <h3>New Cases</h3>
            <h1>{state.todayCases}</h1>
          </div>

          <div className="card6">
            <h3>Today's Deaths</h3>
            <h1>{state.todayDeaths}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidTracker;
