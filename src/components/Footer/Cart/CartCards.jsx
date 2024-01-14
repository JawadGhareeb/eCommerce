import React from "react";
import Click from "../../Home/Landing2/Click/Click";
import List from "./List/List";
import ID from "./ID";
import "./cart.css";
const CartCards = ({ data, deleteItem }) => {
    function start() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className="sold" onLoad={start}>
            <div className="container">
                <div class="heading">
                    <h3>Your Cart</h3>
                </div>
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>

                        {data.length !== 0 ? (
                            <tbody>
                                {data.map((e) => (
                                    <ID
                                        imgUrl={e.imgUrl}
                                        numberOfStars={e.numberOfStars}
                                        explore={e.explore}
                                        costBefore={e.costBefore}
                                        costAfter={e.costAfter}
                                        sold={e.sold}
                                        numOfSold={e.numOfSold}
                                        text={e.text}
                                        id={e.id}
                                        deleteItem={deleteItem}
                                    />
                                ))}
                            </tbody>
                        ) : (
                            <div>
                                <p>You cart is empty ...</p>
                                <p>Plesse Add some Products </p>
                            </div>
                        )}
                    </table>
                </div>
                <div className="clicks">
                    <form action="">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter coupon code"
                            className="in"
                        />
                    </form>
                    <Click text={"Apply"} />
                    <Click text={"Add To Cart"} />
                </div>
                <List />
            </div>
        </div>
    );
};

export default CartCards;
