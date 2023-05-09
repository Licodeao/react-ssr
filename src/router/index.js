import Home from "../views/home";
import Mine from "../views/Mine";
import React from "react";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
];

export default routes;
