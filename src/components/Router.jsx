import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Eye from "./Eye/Eye";

function Router() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Eye />
      <Footer />
    </Fragment>
  );
}
export default Router;
