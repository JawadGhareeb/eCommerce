import React from "react";
import "./conact.css";
const Conact = () => {
    function start() {
        console.log("aas");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div onLoad={start}>
            <div className="contact">
                <div className="container">
                    <div className="explore">
                        <div className="text">
                            <ul className="scond-links">
                                <li>
                                    <a>Home</a>
                                </li>
                                <li className="border"></li>
                                <li>
                                    <a className="active">Contact</a>
                                </li>
                            </ul>
                            <h2 className="heading">Contact With Us</h2>
                        </div>
                        <div className="imag">
                            <img src="/assests/product-45.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="container">
                    <div className="info">
                        <div className="inputs">
                            <div className="text">
                                <h3>We would love to hear from you.</h3>
                                <p>
                                    If you’ve got great products your making or
                                    looking to work with us then drop us a line.
                                </p>
                            </div>
                            <form>
                                <div className="put">
                                    <div className="box">
                                        <input type="text" className="name" />
                                        <label>Name</label>
                                    </div>
                                    <div className="box">
                                        <input type="text" className="name" />
                                        <label>Phone</label>
                                    </div>
                                    <div className="box">
                                        <input type="email" className="name" />
                                        <label>E-mail</label>
                                    </div>
                                </div>
                                <div className="box">
                                    <textarea className="message"></textarea>
                                    <label>Your Message</label>
                                </div>
                            </form>
                            <a>
                                <button>Send Information</button>
                            </a>
                        </div>
                        <div className="adres">
                            <div className="one">
                                <h3>Our Store</h3>
                                <p>
                                    8212 E. Glen Creek Street Orchard Park, NY
                                    14127, United States of America
                                </p>
                                <span>Phone: +123 456 7890</span>
                                <span>Email: Hello@etrade.com</span>
                            </div>
                            <div className="one">
                                <h3>Careers</h3>
                                <p>
                                    Instead of buying six things, one that you
                                    really like.
                                </p>
                            </div>
                            <div className="one">
                                <h3>Opening Hours:</h3>
                                <span>Monday to Saturday: 9am - 10pm</span>
                                <span>Sundays: 10am - 6pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2278.538097827611!2d37.128324337612796!3d36.20959626107259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff813b98135af%3A0x967e5e5fc542c32a!2z2K3ZhNio2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2sus!4v1676660514978!5m2!1sar!2sus"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Conact;
