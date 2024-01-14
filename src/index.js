/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./components/Router.jsx";
import MorePro from "./components/More_Products/MorePro";
import Home from "./components/Home/Home";
import Account from "../src/components/Footer/Account/Account.jsx";
import Cart from "./components//Footer/Cart/Cart";
import Conact from "./components/Header/Conact/Conact.jsx";
import store from "./components/state/index.js";
import { Provider } from "react-redux";
import SingIn from "./components/Footer/Reg/SinIn.jsx";
import LogIn from "./components/Footer/Reg/LogIn/LogIn.jsx";
import About from "./components/Header/About/About.jsx";
import "./App.css";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "moreProducts",
        element: <MorePro />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "myAccount",
        element: <Account />,
      },
      {
        path: "reg",
        element: <SingIn />,
      },
      {
        path: "reg/login",
        element: <LogIn />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "conact",
        element: <Conact />,
      },
      {
        path: "/:id",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />{" "}
  </Provider>
);
