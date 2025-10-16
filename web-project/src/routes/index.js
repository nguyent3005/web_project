import { Component } from "react";
import Home from "../page/Home";
import Following from "../page/Following";
const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/following", Component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
