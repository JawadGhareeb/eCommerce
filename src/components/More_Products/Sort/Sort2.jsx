import React from "react";
import { useState } from "react";
import "./sort.css";

const Sort2 = (props) => {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    };
    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value={props.s1}>{props.s1}</option>
                <option value={props.s2}>{props.s2}</option>
                <option value={props.s3}>{props.s3}</option>
                <option value={props.s4}>{props.s4}</option>
            </select>
        </form>
    );
};

export default Sort2;
