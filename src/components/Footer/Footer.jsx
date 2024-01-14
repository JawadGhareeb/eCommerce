import React from "react";
import Section from "./Section";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Section />
      <footer>
        <div className="container">
          <div className="links">
            <div className="accounts">
              <div className="one">
                <h4>Support</h4>
                <ul className="change">
                  <p>685 Market Street, Las Vegas, United States.</p>
                  <li className="normal">
                    <a
                      href="mailto:bashbosh876@gmail.com"
                      className="nor"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <EmailIcon /> bashbosh876@gmail.com
                    </a>
                  </li>
                  <li className="normal">
                    <a
                      href="tel:+963 957 961 434"
                      className="nor"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <LocalPhoneIcon /> +963 957 961 434
                    </a>
                  </li>
                </ul>
              </div>
              <div className="one">
                <h4>Account</h4>
                <ul>
                  <li>
                    <NavLink to="myAccount">My accounts</NavLink>
                  </li>
                  <li>
                    <NavLink to="reg">Login / Reg</NavLink>
                  </li>
                  <li>
                    <NavLink to="cart">Cart</NavLink>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                </ul>
              </div>
              <div className="one">
                <h4>Quick Link</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="one">
                <h4>Download App</h4>
                <div className="downlaod">
                  <span>Save $3 With App & New User only</span>
                  <div className="app">
                    <div className="QR">
                      <img src="/assests/qr.webp" alt="" />
                    </div>
                    <div className="store">
                      <a className="play">
                        <img src="/assests/play-store.webp" alt="" />
                      </a>
                      <a className="play">
                        <img src="/assests/app-store.webp" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot">
            <ul className="social">
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="face">
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
            <div className="create">
              <h5>
                © 2022. All rights reserved by <a href="#">Axilthemes</a>.
              </h5>
            </div>
            <div className="accept">
              <span>Accept For</span>
              <ul className="images">
                <li>
                  <img src="/assests/cart-1.webp" alt="" />
                </li>
                <li>
                  <img src="/assests/cart-2.webp" alt="" />
                </li>
                <li>
                  <img src="/assests/cart-5.webp" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
