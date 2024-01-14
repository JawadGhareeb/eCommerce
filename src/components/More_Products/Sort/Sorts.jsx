import React from "react";
import Sort from "./Sort";
import Sort2 from "./Sort2";
import "./sort.css";
const Sorts = () => {
    return (
        <div className="sorts">
            <div className="container">
                <div className="sort f">
                    <Sort
                        s1="Categories"
                        s2="Fashion"
                        s3="Electronics"
                        s4="Electronics"
                        s5="Furniture"
                    />
                    <Sort s1="Color" s2="Red" s3="Blue" s4="Green" s5="Pink" />
                    <Sort
                        s1="Price Range"
                        s2="0 - 100"
                        s3="100 - 500"
                        s4="500 - 1000"
                        s5="1000 - 1500"
                    />
                </div>
                <div className="sort s">
                    <Sort2
                        s1="Sort by Latest"
                        s2="Sort by Name"
                        s3="Sort by Price"
                        s4="Sort by Viewed"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sorts;
