import React from "react";
import Message from "./Messages/Message";
import ListMessage from "./Messages/ListMessage";
import { AiOutlineMessage } from "react-icons/ai";
import "./testimonials.css";
const Testimonials = () => {
    return (
        <div className="messages">
            <div className="testimonials">
                <div className="container">
                    <div className="main-head">
                        <div className="dox">
                            <div className="textt">
                                <AiOutlineMessage />
                                <p>Testimonials</p>
                            </div>
                            <h2>Users Feedback</h2>
                        </div>
                    </div>
                    <div className="content">
                        {ListMessage.map((e) => (
                            <Message text={e.text} img={e.img} name={e.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
