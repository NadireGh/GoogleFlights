import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import HeroImage from "../src/components/Header/HeroImage";
import FlightCards from "../src/components/Flights/FlightCards";

function App() {
  return (
    <div className="App">
      <HeroImage />
      <h2>My FLight Data Will be here</h2>
      <FlightCards />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
