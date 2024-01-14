import React from "react";

const Section = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="content">
                    <div className="box">
                        <div className="image">
                            <img src="/assests/service1.webp" alt="" />
                        </div>
                        <div className="text">
                            <h5>Fast & Secure Delivery</h5>
                            <span>Tell about your service.</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/assests/service2.webp" alt="" />
                        </div>
                        <div className="text">
                            <h5>Money Back Guarantee</h5>
                            <span>Within 10 days.</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/assests/service3.webp" alt="" />
                        </div>
                        <div className="text">
                            <h5>24 Hour Return Policy</h5>
                            <span>No question ask.</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/assests/service4.webp" alt="" />
                        </div>
                        <div className="text">
                            <h5>Pro Quality Support</h5>
                            <span>24/7 Live support.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
