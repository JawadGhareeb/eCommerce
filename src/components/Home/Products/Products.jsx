import React from "react";
import "./Products.css";
import CardsPr from "./CardsPr/CardsPr";
import { RiPriceTag2Line } from "react-icons/ri";
import ListCards from "./CardsPr/ListCards";
import { NavLink } from "react-router-dom";
function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="header-art">
          <div className="main-head">
            <div className="dox">
              <div className="textt">
                <RiPriceTag2Line />
                <p>Our Products</p>
              </div>
              <h2>Explore our Products</h2>
            </div>
          </div>
        </div>
        <div className="cards">
          {ListCards.map((e) => (
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
        <div className="button">
          <NavLink to="moreProducts">View All Products</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Products;
