import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardMain from "../CardMain";
import Cart from "./cart"; // Ensure Cart component is correctly imported

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/CardMain" component={CardMain} />
      </Switch>
    </Router>
  );
}

export default App;
