import React from "react";
import "./list.css";
const List = () => {
    return (
        <div className="list">
            <div className="container">
                <div className="up">
                    <div className="order">
                        <h3>Order Summary</h3>
                        <div className="sum">
                            <span>Subtotal</span>
                            <span>$117.00</span>
                        </div>
                        <div className="shoping ">
                            <span>Shipping:</span>
                            <form action="#">
                                <input
                                    type="radio"
                                    id="test1"
                                    name="radio-group"
                                    checked
                                />
                                <label for="test1">Free Shippping</label>
                                <div className="z-radio">
                                    <input
                                        type="radio"
                                        id="test2"
                                        name="radio-group"
                                    />
                                    <label for="test2">Local: $35.00</label>
                                </div>
                                <div className="z-radio">
                                    <input
                                        type="radio"
                                        id="test3"
                                        name="radio-group"
                                    />
                                    <label for="test3">Flat rate: $12.00</label>
                                </div>
                            </form>
                        </div>
                        <div className="state">
                            <span>State Tax</span>
                            <span>$8.00</span>
                        </div>
                        <div className="total">
                            <span>Total</span>
                            <span className="blue"> $125.00</span>
                        </div>
                        <a>
                            <button>Process to Checkout</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
