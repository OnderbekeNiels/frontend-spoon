import React from "react";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
