import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./header.css";
import "../../App.css";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const { records } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const [mOre, setmore] = useState(false);

  function menu() {
    document.querySelector(".secoundLinks").classList.add("veiw");
    document.querySelector(" .popup").classList.add("pop");
  }
  function noVeiw() {
    document.querySelector(".secoundLinks").classList.remove("veiw");
    document.querySelector(".popup").classList.remove("pop");
    document.querySelector(".view").classList.remove("added");
  }
  let men = useRef();
  const handel = (e) => {
    if (!men.current.contains(e.target)) setmore(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handel);
  });
  const [mOre2, setmore2] = useState(false);

  function menu2() {
    document.querySelector(".secoundLinks").classList.add("veiw");
    document.querySelector(" .popup").classList.add("pop");
  }
  function noVeiw() {
    document.querySelector(".secoundLinks").classList.remove("veiw");
    document.querySelector(".popup").classList.remove("pop");
    document.querySelector(".view").classList.remove("added");
  }
  let men2 = useRef();
  const handel2 = (e) => {
    if (!men2.current.contains(e.target)) setmore2(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handel2);
  });
  return (
    <>
      <div className="popup" onClick={noVeiw}></div>
      <ul className="secoundLinks linkss">
        <div className="mark">
          <img src="/assests/logo.png" alt="" />
          <li
            onClick={noVeiw}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              borderRadius: "50%",
              position: "relative",
              transition: ".3s",
              zIndex: "2",
            }}
          >
            <CloseIcon
              className="iconHover"
              sx={{
                backgroundColor: "#3577f0",
                color: "#fff",
                borderRadius: "50%",
                padding: "5px",
                fontSize: "20px",
              }}
            />
          </li>
        </div>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="moreProducts">Shop</NavLink>
        </li>
        <li ref={men2}>
          <li className="page" onClick={() => setmore2(!mOre2)}>
            <a className="pge">
              Pages
              <KeyboardArrowDownIcon />
            </a>
          </li>
          <li className={`pgelinks ${mOre2 ? `more` : ``}`}>
            <NavLink to="/cart">Wishlist</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/myAccount">Accont</NavLink>
            <NavLink to="/reg">Sign Up</NavLink>
          </li>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/conact">Contact</NavLink>
        </li>
      </ul>
      <header>
        <FontAwesomeIcon icon="fa-brands fa-font-awesome" />
        <div className="container">
          <div className="allElement">
            <div className="logo">
              <img src="/assests/logo.png" alt="" />
            </div>
            <ul className="linkss">
              <div className="mark">
                <img src="/assests/logo.png" alt="" />
                <i class="fa-solid fa-xmark" onClick={noVeiw}></i>
              </div>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="moreProducts">Shop</NavLink>
              </li>
              <li ref={men}>
                <li className="page" onClick={() => setmore(!mOre)}>
                  <a
                    className="pge"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Pages
                    <KeyboardArrowDownIcon />
                  </a>
                </li>
                <li className={`pgelinks ${mOre ? `more` : ``}`}>
                  <NavLink to="/cart">Wishlist</NavLink>
                  <NavLink to="/cart">Cart</NavLink>
                  <NavLink to="/myAccount">Accont</NavLink>
                  <NavLink to="/reg">Sign Up</NavLink>
                </li>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/conact">Contact</NavLink>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <span>{records.length}</span>
                  <ShoppingCartIcon className="iconHover" />
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/reg");
                  }}
                >
                  <PersonIcon className="iconHover" />
                </a>
              </li>
              <li className="menu">
                <a onClick={menu2}>
                  <MenuIcon className="iconHover" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
