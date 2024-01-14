import React from "react";
import "./landing.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeadphonesIcon from "@mui/icons-material/Headphones";
const Landing = () => {
  return (
    <div className="main-landing">
      <div className="container">
        <div className="all">
          <div className="text">
            <div className="hot">
              <HeadphonesIcon
                sx={{
                  color: "#fff",
                  backgroundColor: "#ff497c",
                  borderRadius: "50%",
                }}
              />{" "}
              <span>Hot Deal In This Week</span>
            </div>
            <h2>Roco Wireless Headphone</h2>
            <div className="reviews">
              <a>
                <button style={{ display: "flex", alignItems: "center" }}>
                  <ShoppingCartIcon />
                  Shop Now
                </button>
              </a>
              <div className="rteimg">
                <div className="smlimg">
                  <img src="/assests/author1.png" alt="" />
                  <img src="/assests/author2.png" alt="" />
                  <img src="/assests/author3.png" alt="" />
                  <img src="/assests/author4.png" alt="" />
                </div>
                <div className="rate">
                  <div className="icons-rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <span>100+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="images">
            <div className="head-phone">
              <div className="from">
                <span>From:</span>
                <span className="price">$49.00</span>
              </div>
              <img src="/assests/product-38.png" alt="" />
            </div>
          </div>
        </div>
        <div className="shap">
          <img src="/assests/shape-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
