
import React from "react";
import "../index.css";
import zohaib from "../images/Our Team/zohaib.jpeg";
import ali from "../images/Our Team/ali.jpeg";
import rafay from "../images/Our Team/rafay.jpeg";
import Style from './css/About.module.css';


const AboutUs = () => {
  return (
    <>
      <section>
        <div className="row row1">
          <h1 className={Style.aboutheading}>Our Team</h1>
        </div>
        <div className="row row1">
          {/* <!-- Column 1--> */}
          <div className="column column1">
            <div className="cards cards_img">
              <div className="img-container">
                <img src={zohaib} alt="#" />
              </div>
              <h3>Muhammad Zohaib</h3>
              <p className="para">FrontEnd Developer</p>
              <div className="icons">
                {/* <a href="/">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.linkedin.com/in/zohaib-nazakat/"
                        target="_linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/zohaib-nazakat" target="_github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:zohaibnazakat@gmail.com">
                <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Column 2--> */}
          <div className="column column1">
            <div className="cards cards_img">
              <div className="img-container">
                <img src={ali} alt="/" />
              </div>
              <h3>Muhammad Ali</h3>
              <p className="para">Data Base Developer</p>
              <div className="icons">
                {/* <a href="/">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Column 3--> */}
          <div className="column column1">
            <div className="cards cards_img">
              <div className="img-container">
                <img src={zohaib} alt="/" />
              </div>
              <h3>Musharaf</h3>
              <p className="para">BackEnd Developer</p>
              <div className="icons">
                {/* <a href="/">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Column 4--> */}
          <div className="column column1 mt-5 center">
            <div className="cards cards_img">
              <div className="img-container">
                <img src={rafay} alt="/" />
              </div>
              <h3>Muhammad Rafay</h3>
              <p className="para">BackEnd Developer</p>
              <div className="icons">
                {/* <a href="/">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;