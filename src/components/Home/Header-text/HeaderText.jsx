import React from "react";
import { FaTags } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
function HeaderText(props) {
  return (
    <div className="main-head">
      <div className="dox">
        <div className="textt">
          <FaTags />
          <p>{props.head}</p>
        </div>
        <h2>{props.explore}</h2>
      </div>
      <div className="chang">
        <div className="i i1">
          <BsArrowLeft />
        </div>
        <div className="i i2">
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
