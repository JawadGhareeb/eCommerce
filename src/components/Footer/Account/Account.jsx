import React from "react"
import {useEffect} from "react"
import {RxDashboard} from "react-icons/rx"
import {BsDownload, BsPerson} from "react-icons/bs"
import {AiOutlineHome} from "react-icons/ai"
import {TbMenuOrder} from "react-icons/tb"
import {CiLogout} from "react-icons/ci"
import {NavLink} from "react-router-dom"
import "./account.css"
const Account = () => {
    function start() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div onLoad={start}>
            <div className="account">
                <div className="container">
                    <div className="head">
                        <div className="container">
                            <div className="addres">
                                <NavLink className="a" to="/">
                                    Home |{" "}
                                </NavLink>
                                <span>My Account</span>
                            </div>
                            <p>Explore All Products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="users">
                        <div class="image">
                            <img src="/assests/author1.png" alt="" />
                        </div>
                        <div className="text">
                            <h3>Hello Annie</h3>
                            <span>eTrade Member Since Feb 2022</span>
                        </div>
                    </div>
                    <div className="info">
                        <ul className="dash">
                            <li className="blur">
                                <a href="">
                                    <RxDashboard />

                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <TbMenuOrder />
                                    <span>Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <BsDownload />
                                    <span>Downloads</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <AiOutlineHome />
                                    <span>Address</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <BsPerson />
                                    <span>Account Details</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <CiLogout />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                        <div className="txt">
                            <h6>
                                Hello Annie (not <span>Annie?</span>{" "}
                                <a href="">Log Out</a>)
                            </h6>
                            <p>
                                From your account dashboard you can view your
                                recent orders, manage your shipping and billing
                                addresses, and edit your password and account
                                details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
