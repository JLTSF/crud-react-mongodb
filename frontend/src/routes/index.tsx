import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { UpdateCar } from "../pages/UpdateCar";
import { DetailsCar } from "../pages/Details";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={UpdateCar} exact path="/update/:id" />
        <Route component={DetailsCar} exact path="/details/:id" />
      </Switch>
    </BrowserRouter>
  );
};
