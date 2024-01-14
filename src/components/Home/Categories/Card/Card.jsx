import React from "react";
import "./card.css"
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="avatar" />
            <p>{props.name}</p>
        </div>
    )
}
export default Card ;