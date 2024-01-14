import React from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import CardsWeeks from "./CardsWeeks/CardsWeeks";
import ListWeeks from "./CardsWeeks/ListWeeks";
import "./weeks.css";
const Weeks = () => {
  function left() {
    document.querySelector(".cardsWeek").scrollBy({
      left: -400,
      behavior: "smooth",
    });
  }
  function right() {
    document.querySelector(".cardsWeek").scrollBy({
      left: 400,
      behavior: "smooth",
    });
  }

  return (
    <div className="week">
      <div className="container">
        <div className="main-head">
          <div className="dox">
            <div className="textt">
              <FaCalendarWeek />
              <p>This Week’s</p>
            </div>
            <h2>New Arrivals</h2>
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
        <div className="cardsWeek">
          {ListWeeks.map((e) => (
            <CardsWeeks
              imgUrl={e.imgUrl}
              explore={e.explore}
              costBefore={e.costBefore}
              costAfter={e.costAfter}
              sold={e.sold}
              numOfSold={e.numOfSold}
              text={e.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weeks;
