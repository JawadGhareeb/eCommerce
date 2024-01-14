import { React, useState } from "react";
import CardsPr from "./CardsPr/CardsPr";
import Sorts from "./Sort/Sorts";
import "./MorePro.css";
import { NavLink } from "react-router-dom";
import LMorePro from "./LMorePro";
function MorePro() {
  function start() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const [ll, setl] = useState(LMorePro);
  return (
    <div className="more-pro" onLoad={start}>
      <div className="head">
        <div className="container">
          <div className="addres">
            <NavLink className="a" to="/">
              Home |{" "}
            </NavLink>
            <span>My Account</span>
          </div>
          <p>Explore All Products</p>
        </div>
      </div>
      <Sorts />
      <div className="cards">
        <div className="container">
          {ll.map((e) => (
            <CardsPr
              imgUrl={e.imgUrl}
              numberOfStars={e.numberOfStars}
              explore={e.explore}
              costBefore={e.costBefore}
              costAfter={e.costAfter}
              sold={e.sold}
              numOfSold={e.numOfSold}
              text={e.text}
              id={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default MorePro;
