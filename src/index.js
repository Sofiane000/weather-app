import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import WeatherApp from "./App";

ReactDOM.render(<WeatherApp />, document.getElementById("root"));
serviceWorker.unregister();
