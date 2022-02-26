import React from "react";
import { useRoutes } from "react-router-dom";
import Counter from "./components/Counter";
import Grade from "./components/Grade";
import Home from "./Pages/Home";
import Calc from "./components/Calc";
import Login from "./components/Login";
import Bmi from "./components/Bmi";
import Lotto from "./components/Lotto";
export default function App(){
  return useRoutes([
    { path: "/", element: <Home />},
    { path: "/bmi", element: <Bmi />},
    { path: "/calc", element: <Calc />},
    { path: "/grade", element: <Grade />},
    { path: "/login", element: <Login />},
    { path: "/count", element: <Counter />},
    { path: "/lotto", element: <Lotto />}
  

  ])
}
