import React from "react";
import { BiLike } from "react-icons/bi";
import ListChose from "./ChoseCard/ListChose";
import "./chose.css";
import ChoseCard from "./ChoseCard/ChoseCard";
const Chose = () => {
    return (
        <div className="choose">
            <div className="container">
                <div className="main-head">
                    <div className="dox">
                        <div className="textt">
                            <BiLike />
                            <p>Why Us</p>
                        </div>
                        <h2>Why People Choose Us</h2>
                    </div>
                </div>
                <div className="services">
                    {ListChose.map((e) => (
                        <ChoseCard img={e.img} explane={e.explane} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chose;
