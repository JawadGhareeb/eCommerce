import React from "react";
import "./click.css";
const Click = (props) => {
    return (
        <div className="click">
            <a>{props.text}</a>
        </div>
    );
};

export default Click;
