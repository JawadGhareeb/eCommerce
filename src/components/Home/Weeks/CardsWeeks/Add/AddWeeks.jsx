import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./AddWeeks.css";
function AddWeeks(props) {
    return (
        <div className="addC">
            <div className="i">
                <AiOutlineHeart />
            </div>
            <a>{props.text}</a>
            <div className="i">
                <MdOutlineRemoveRedEye />
            </div>
        </div>
    );
}
export default AddWeeks;
