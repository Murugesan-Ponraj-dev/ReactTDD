import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import UserDashBoard from "../Components/UserDashboard";
import { BASE_PATH } from "../Constants/routeConstant";

class RouteConfig extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={BASE_PATH}
            Component={UserDashBoard}
          />
        </Routes>
      </BrowserRouter>
    )
  }
}
export default RouteConfig
