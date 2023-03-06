import React from "react";
import {Link} from 'react-router-dom';
import './css/Footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="row pt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3 style">
                  {/* <h2>Company</h2> */}
                  <h2>About Us</h2>
                  <p className="footer_para">
                    Universe is a Website base platform where Students and
                    Teachers Can Interact with eachother
                  </p>
                  <p className="footer_email">
                    <span className="footer_fontawesome">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <a href="mailto:zohaibnazakat@gmail.com.com">
                      Zohaibnazakat@gmail.com
                    </a>
                  </p>
                  <p className="footer_email">
                    <span className="footer_fontawesome">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <a href="+923412802701">+923412802701</a>
                  </p>
                </div>

                <div className="col-6 col-lg-3 style ">
                  <h2 className="ms-5 ps-4">Pages</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                    <a href="mailto:zohaibnazakat@gmail.com">
                      Contact Us
                    </a>
                    </li>
                    {/* 
                    <li>
                      <a href="/">Feedback</a>
                    </li> */}
                  </ul>
                </div>

                {/* <div className="col-6 col-lg-3 style">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="/">Lorem</a>
                    </li>
                    <li>
                      <a href="/">Lorem</a>
                    </li>
                     <li>
                      <a href="/">Lorem</a>
                    </li>
                    
                    <li>
                      <a href="/">About</a>
                    </li>
                  </ul>
                </div> */}

                <div className="col-6 col-lg-3 style">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a
                        href="https://web.facebook.com/groups/1810538082549887"
                        target="_pujc"
                      >
                        <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/pujc_clicks/"
                        target="_pujc"
                      >
                        {/* <i class="fab fa-instagram fontawesome-style"></i> */}
                        <i class="fa-brands fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://twitter.com/PU_OfficialPK"
                        target="_pujc"
                      >
                        {/* <i class="fab fa-instagram fontawesome-style"></i> */}
                        <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                    {/* <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div> */}
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-4">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Universe. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;