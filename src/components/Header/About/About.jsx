import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./about.css";
const About = () => {
  function start() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
                <span>About</span>
              </div>
              <p>About Our Store</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutstore">
        <div className="container">
          <div className="shop">
            <img src="/assests/about-01.png" alt="" />
            <div className="abt">
              <div className="str">
                <i className="fa-solid fa-basket-shopping fa-fw"></i>
                <span>About Store</span>
              </div>
              <h3>Online shopping includes both buying things online.</h3>
              <p>
                Salesforce B2C Commerce can help you create unified, intelligent
                digital commerce experiences — both online and in the store.
              </p>
              <div className="spn">
                <p>
                  Empower your sales teams with industry tailored solutions that
                  support manufacturers as they go digital, and adapt to
                  changing markets & customers faster by creating new business.
                </p>
                <p>
                  Salesforce B2B Commerce offers buyers the seamless,
                  self-service experience of online shopping with all the B2B.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="probably">
        <div className="container">
          <div className="boxes">
            <div className="box">
              <img src="/assests/shape-01.png" alt="" />
              <h4>40,000+ Happy Customer</h4>
              <p>
                Empower your sales teams with industry tailored solutions that
                support.
              </p>
            </div>
            <div className="box">
              <img src="/assests/shape-02.png" alt="" />
              <h4>16 Years of Experiences</h4>
              <p>
                Empower your sales teams with industry tailored solutions that
                support.
              </p>
            </div>
            <div className="box">
              <img src="/assests/shape-03.png" alt="" />
              <h4>12 Awards Won</h4>
              <p>
                Empower your sales teams with industry tailored solutions that
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <div className="all">
            <div className="text">
              <div className="sub">
                <a>
                  <PeopleAltIcon />
                </a>
                <span>Our Team</span>
              </div>
              <h2>Expart Management Team</h2>
            </div>
          </div>
          <div className="members">
            <div className="box">
              <div className="image">
                <img src="/assests/IMG_20220512_183328_628.HEIC" alt="" />
              </div>
              <div className="ul">
                <a
                  href="https://www.facebook.com/profile.php?id=100078778718000&mibextid=ZbWKwL"
                  target="_bank"
                >
                  <FacebookIcon />
                </a>

                <a href="https://www.instagram.com/ahmad09_ha" target="_bank">
                  <InstagramIcon />
                </a>

                <a>
                  <LinkedInIcon />
                </a>
              </div>
              <div className="text">
                <span>Back-End Developer</span>
                <h3>Ahamd Hasan</h3>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="/assests/1000027529-01.png" alt="" />
              </div>
              <div className="ul">
                <a href="https://facebook.com/JawadGhareeb.12" target="_bank">
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/jawad.ghareeb"
                  target="_bank"
                >
                  <InstagramIcon />
                </a>

                <a href="">
                  <LinkedInIcon />
                </a>
              </div>
              <div className="text">
                <span>Front-End Developer</span>
                <h3>Jawad Ghareeb</h3>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="/assests/FB_IMG_1677174307654.jpg" alt="" />
              </div>
              <div className="ul">
                <a href="https://www.facebook.com/mhmdaghryba" target="_bank">
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/mohammad.al.ghareeb"
                  target="_bank"
                >
                  <InstagramIcon />
                </a>

                <a>
                  <LinkedInIcon />
                </a>
              </div>
              <div className="text">
                <span>Front-End Developer</span>
                <h3>Mohamad Ghareeb</h3>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="/assests/1671544005455.jpg" alt="" />
              </div>
              <div className="ul">
                <a href="https://www.facebook.com/abodHares.1" target="_bank">
                  <FacebookIcon />
                </a>

                <a
                  href="https://instagram.com/abod_hares?igshid=MzRlODBiNWFlZA=="
                  target="_bank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrahman-hares-2aa15b24a"
                  target="_bank"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div className="text">
                <span>Front-End Developer</span>
                <h3>Abod Hares</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="soulation">
        <div className="container">
          <div className="together">
            <img src="/assests/about-02.png" alt="" />
            <div className="slt">
              <div className="work">
                <span>Features #01</span>
                <h3>Solutions that work together</h3>
              </div>
              <p>
                Publish your eCommerce site quickly with our easy-to-use store
                builder— no coding required. Migrate your items from your point
                of sale system or turn your Instagram feed into a shopping site
                and start selling fast. Square Online works for all kinds of
                businesses—retail, restaurants, services.
              </p>
              <a href="">
                <button>Get In Touch</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="soulation">
        <div className="container">
          <div className="together reverse">
            <img src="/assests/about-03.png" alt="" />
            <div className="slt">
              <div className="work">
                <span>Features #01</span>
                <h3>Solutions that work together</h3>
              </div>
              <p>
                Publish your eCommerce site quickly with our easy-to-use store
                builder— no coding required. Migrate your items from your point
                of sale system or turn your Instagram feed into a shopping site
                and start selling fast. Square Online works for all kinds of
                businesses—retail, restaurants, services.
              </p>
              <a href="">
                <button>Get In Touch</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
