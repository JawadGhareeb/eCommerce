import React from "react";

const Message = (props) => {
    return (
        <div className="box">
            <div className="text">
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img src={props.img} alt="" />
                <div className="desc">
                    <span>Head Of Idea</span>
                    <h6>{props.name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Message;
