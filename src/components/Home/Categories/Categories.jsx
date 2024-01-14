import React from "react";
import Card from "./Card/Card";
import Cards from "./Card/Cards";
import { FaTags } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Categories.css";

function Categories() {
  function left() {
    document.querySelector(".allCards").scrollBy({
      left: -250,
      behavior: "smooth",
    });
  }
  function right() {
    document.querySelector(".allCards").scrollBy({
      left: 250,
      behavior: "smooth",
    });
  }

  return (
    <div className="categories">
      <div className="container">
        <div className="main-head">
          <div className="dox">
            <div className="textt">
              <FaTags />
              <p>categories</p>
            </div>
            <h2>Browse by Category</h2>
          </div>
          <div className="chang">
            <div className="i i1" onClick={left}>
              <BsArrowLeft />
            </div>
            <div className="i i2" onClick={right}>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="cont">
          <div className="allCards">
            {Cards.map((e) => (
              <Card img={e.imgUrl} name={e.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
