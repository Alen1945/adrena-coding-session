import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RouterLink from "./components/RouteLink";
import Home from "./views/Home";
import Items from "./views/Items";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RouterLink exact path="/" title="Home" component={Home} />
        <RouterLink
          exact
          path="/:movieId"
          title="Detail Movie"
          component={Items}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
