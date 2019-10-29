import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GetLocation from "./GetLocation";
import NextDaysDetails from "./NextDaysDetails";

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
