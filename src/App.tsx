import React from "react";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/screen.scss";
import "./styles/06-components/app.scss";

import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Router>
      <main className="c-app u-bg-color-theme-500">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
