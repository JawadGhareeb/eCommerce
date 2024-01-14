import React from "react";
import Categories from "./Categories/Categories";
import Landing2 from "./Landing2/Landing2";
import Products from "./Products/Products";
import Weeks from "./Weeks/Weeks";
import Chose from "../Chose/Chose";
import Testimonials from "./Testimonials/Testimonials";
import Landing from "./Landing/Landing";
function Home() {
  return (
    <>
      <Landing />
      <Categories />
      <Landing2 />
      <Products />
      <Weeks />
      <Testimonials />
      <Chose />
    </>
  );
}
export default Home;
