import React from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../reg.css";
import "./log.css";
const LogIn = () => {
    function start() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    useEffect(() => {
        document.querySelector(".pgelinks").classList.remove("more");
        console.log("a");
    });
    const navg = useNavigate();
    return (
        <div className="login l" onLoad={start}>
            <div className="container">
                <div className="image">
                    <img src="/assests/logo.png" alt="" />
                    <div className="text">
                        <h2>We Offer the Best Products</h2>
                    </div>
                </div>
                <div className="all">
                    <div className="sigin">
                        <span>Already a member?</span>
                        <NavLink to="reg">
                            <button
                                className="btn"
                                onClick={() => {
                                    navg("/");
                                }}
                            >
                                singin
                            </button>
                        </NavLink>
                    </div>
                    <div className="inputs">
                        <div className="txt">
                            <h2>I'm New Here</h2>
                            <span>Enter your detail below</span>
                        </div>
                        <form>
                            <div className="box">
                                <input
                                    type="text"
                                    className="name"
                                    placeholder="User Name or Email"
                                />
                                <label>User Name or Email</label>
                            </div>

                            <div className="box">
                                <input
                                    type="password"
                                    className="name"
                                    placeholder="Password"
                                />
                                <label>Password</label>
                            </div>
                            <div className="sub">
                                <input type="submit" value="LogIn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
