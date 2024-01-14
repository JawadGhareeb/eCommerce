import React from "react";
import "./info.css";

const Info = () => {
    return (
        <div class="view">
            <div class="details">
                <span class="close-xmark">
                    <i class="fa-solid fa-xmark"></i>
                </span>
                <div class="image">
                    <div class="tols">
                        <img src="./images/product-01.webp" alt="" />
                    </div>
                    <div class="prototype">
                        <div class="rate">
                            <img src="./images/rate.png" alt="" />
                            <p>(1 customers reviews)</p>
                        </div>
                        <div class="size">
                            <h3>Size:</h3>
                            <ul class="list">
                                <li class="active">S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ul>
                        </div>
                        <a>
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div class="serif">
                    <h2>Description:</h2>
                    <h3>Serif Coffee Table</h3>
                    <p class="price">$155.00 - $255.00</p>
                    <ul>
                        <li>In Stock.</li>
                        <li>Free delivery.</li>
                        <li>Sales 30% off Use Code: MOTIVE30.</li>
                    </ul>
                    <p class="exp">
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

export default Info;
