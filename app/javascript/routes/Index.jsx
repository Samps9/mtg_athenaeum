import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Decks from "../components/Decks";
import Cards from "../components/Cards";
import Search from "../components/Search";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/decks" exact component={Decks} />
      <Route path="/deck-builder" exact component={Search} />
    </Switch>
  </Router>
);