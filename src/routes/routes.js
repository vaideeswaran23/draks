import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./../components/App";
import Profile from "./../components/Profile";
import NotFound from "./../components/NotFound";
import King from "../components/King";
import Photos from "../components/Photos";

const routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/king/:name" component={King} />
      <Route path="/profile/photos" component={Photos} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default routes;
