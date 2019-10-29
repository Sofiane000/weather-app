import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GetLocation from "../containers/getLocation";
import NextDaysDetails from "../components/NextDaysDetails";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GetLocation} />
        <Route path="/details" component={NextDaysDetails} />
      </Switch>
    </Router>
  );
}