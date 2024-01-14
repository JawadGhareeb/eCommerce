import React from "react";
import { FiHeadphones } from "react-icons/fi";
import Dat from "./Date/Date";
import Music from "./Music/Music.jsx";
import "./Landing2.css";
import Click from "./Click/Click";
function Landing2() {
  return (
    <div className="landing2">
      <div className="container">
        <div className="poster">
          <div className="main-head">
            <div className="textt">
              <FiHeadphones />
              <p>Don’t Miss!!</p>
            </div>
            <div className="h2">
              <h2>Enhance Your</h2>
              <h2>Music Experience</h2>
            </div>
            <Dat />
            <Click text={"Click it out!"} />
          </div>
          <div className="img">
            <Music />
            <img src="/assests/poster-03.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing2;
