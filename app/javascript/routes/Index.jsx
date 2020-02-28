import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../components/search/Search";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Search} />
    </Switch>
  </Router>
);