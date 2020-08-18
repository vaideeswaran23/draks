import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./../pages/Home"
import Profile from "./../pages/Profile"
import PageNotFound from "./../pages/PageNotFound"


const routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/profile/:uid" component={Profile} exact />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default routes;
