import React from "react";
import "./eye.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Eye = (r) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fo = (e) => {
        document.querySelectorAll(".list li").forEach((t) => {
            t.classList.remove("active");
        });
        e.target.classList.add("active");
    };
    return (
        <div className="view">
            <div className="details">
                <span
                    className="close-xmark"
                    onClick={() => {
                        document
                            .querySelector(".popup")
                            .classList.remove("pop");
                        document
                            .querySelector(".view")
                            .classList.remove("added");
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <div className="image">
                    <div className="tols">
                        <img src="/assests/product-07.png" alt="" />
                    </div>
                    <div className="prototype">
                        <div className="rate">
                            <img src="/assests/rate.png" alt="" />
                            <p>(1 customers reviews)</p>
                        </div>
                        <div className="size">
                            <h3>Size:</h3>
                            <ul className="list">
                                <li className="active" onClick={fo}>
                                    S
                                </li>
                                <li onClick={fo}>M</li>
                                <li onClick={fo}>L</li>
                                <li onClick={fo}>XL</li>
                            </ul>
                        </div>
                        <a>
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div className="serif">
                    <h2>Description:</h2>
                    <h3>Serif Coffee Table</h3>
                    <p className="price">$155.00 - $255.00</p>
                    <ul>
                        <li>In Stock.</li>
                        <li>Free delivery.</li>
                        <li>Sales 30% off Use Code: MOTIVE30.</li>
                    </ul>
                    <p className="exp">
                        In ornare lorem ut est dapibus, ut tincidunt nisi
                        pretium. Integer ante est, elementum eget magna.
                        Pellentesque sagittis dictum libero, eu dignissim
                        tellus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Eye;
