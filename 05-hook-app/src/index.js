import React from "react";
import ReactDOM from "react-dom";
import { Memorize } from "./components/06-memos/Memorize";

ReactDOM.render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
