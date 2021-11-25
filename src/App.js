import React from "react";
import { Home } from "./Components/Pages/Home/Home.jsx";
import { Products } from "./Components/Pages/Products/Products.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>      
    </Router>
  );
}