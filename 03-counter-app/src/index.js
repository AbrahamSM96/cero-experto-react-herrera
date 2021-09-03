import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import "./css/index.css";
const root = document.querySelector("#root");
ReactDOM.render(<CounterApp value={0} />, root);
