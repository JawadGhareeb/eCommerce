import React from "react";
import "./ChoseCard.css";
const ChoseCard = (props) => {
    return (
        <div className="box">
            <img src={props.img} alt="" />
            <div className="descripe">
                <p>{props.explane}</p>
            </div>
        </div>
    );
};

export default ChoseCard;
