import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import Model from "./pages/model";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path='/'
              render={() => <Home imageDetails={imageDetails} />}
            />
            <Route
              exact
              path='/model/:id'
              render={() => <Model imageDetails={imageDetails} />}
            />
          </Switch>
        )}
      />
    </Router>
  );
}

export default App;
