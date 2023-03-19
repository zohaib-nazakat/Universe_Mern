import "./css/Pages.css";
import image from "../images/pujc1.png";
import sanaullah from "../images/sana-ullah.jpg";
import tabasum from '../images/tabassum.jpeg'
import haroon from '../images/haroon.jpg';
import rana from '../images/rana.jpeg';
import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import university1 from '../images/university1.jpeg';
import university2 from '../images/university2.jpeg';
import university3 from '../images/university3.jpeg';


function UniverseDapartment() {
  const divRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShouldAnimate(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image} className="d-block w-100 opacity-75" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="opacity-100">Business Administration</h1>
              <p className="opacity-100 fw-bold fs-5">
                The Department of Information Technology at PUJC has been
                established with the aim of providing state-of-the-art computer
                facilities to the students. Maintaining strong links with the
                industry....
              </p>
              <a href='#it'>
              <button type="button" className="btn main_btn me-2" >
                Read More
              </button></a>
              <a href="#faculty">
              <button type="button" className="btn main_btn">
                Faculty
              </button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100 opacity-75" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="opacity-100">Business Administration</h1>
              <p className="opacity-100 fw-bold fs-5">
                The Department of Information Technology at PUJC has been
                established with the aim of providing state-of-the-art computer
                facilities to the students. Maintaining strong links with the
                industry....
              </p>
              <a href='#it'>
              <button type="button" className="btn main_btn me-2" >
                Read More
              </button></a>
              <a href="#faculty">
              <button type="button" className="btn main_btn">
                Faculty
              </button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100 opacity-75" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="opacity-100">Business Administration</h1>
              <p className="opacity-100 fw-bold fs-5">
                The Department of Information Technology at PUJC has been
                established with the aim of providing state-of-the-art computer
                facilities to the students. Maintaining strong links with the
                industry....
              </p>
              <a href='#it'>
              <button type="button" className="btn main_btn me-2" >
                Read More
              </button></a>
              <a href="#faculty">
              <button type="button" className="btn main_btn">
                Faculty
              </button></a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ```````````````````````````````````````````````````````````````````````` */}
      <div
        className={`my-div card ${shouldAnimate ? "animate" : ""}`}
        ref={divRef}
        style={{ width: "84rem" }}
        id="it"
      >
        <img src={university1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="d_info" >Department Information</h1>
          <p className="card-text text-center" >
          BBA-Hons. Program is divided into 8 semesters. Each semester spread over a span of 4½ months. In this period, a total 138 credit hours are required to be completed. This package will consist of 42 courses with 3 credit hours each. The research project and internship will also be offered after completion of sixth semester. Research project can be replaced with two elective courses. However internship of 6 credit hours is compulsory. Both research project and internship are equivalent to 6 credit hour each.
          </p>
        </div>
      </div>
      {/* `````````````````````````````````````````````````` */}
      <div class="card" style={{ width: "84rem" }}>
        <div class="card-body">
          <h1 class="d_req">Requirements</h1>
          <p class="p_req">
            Students with F.A./F.Sc./A Levels or equivalent qualification with
            at least 50% marks and age not more than 24 years are eligible for
            admission. The admission merit is calculated using weightage of
            marks obtained in Matric and F.A./F.Sc./A Levels. In case a
            candidate has passed F.A./F.Sc./A Levels. or equivalent in previous
            years, 2% marks for each session are deducted from marks obtained
            out of 100. There are no age and session restrictions in case of
            students seeking admission to BS program run on self-supporting
            basis.
          </p>
        </div>
        <img src={university2} className="card-img-top" alt="..." />
      </div>
      {/* `````````````````````````````````````````````````` */}
      <div
        class="card"
        className={`my-div card ${shouldAnimate ? "animate" : ""}`}
        ref={divRef}
        style={{ width: "84rem" }}
      >
        <img src={university3} className="card-img-top" alt="..." />
        <div class="card-body">
          <h1 class="d_req">Career</h1>
          <p class="p_req">
            Students with F.A./F.Sc./A Levels or equivalent qualification with
            at least 50% marks and age not more than 24 years are eligible for
            admission. The admission merit is calculated using weightage of
            marks obtained in Matric and F.A./F.Sc./A Levels. In case a
            candidate has passed F.A./F.Sc./A Levels. or equivalent in previous
            years, 2% marks for each session are deducted from marks obtained
            out of 100. There are no age and session restrictions in case of
            students seeking admission to BS program run on self-supporting
            basis.
          </p>
        </div>
      </div>
      {/* `````````````````````````````````````````````````` */}
      <div class="card" style={{ width: "84rem" }}>
        <div class="card-body">
          <h1 class="d_req">Structure</h1>
          <p class="p_req">
            The program requirements can normally be completed in eight
            semesters over four years. The maximum duration for completion of
            the program is six years. However students exceeding four years will
            not be treated as regular students and will not be entitled to any
            facility normally available to regular students such as hostel
            accommodation, healthcare and transportation.
          </p>
        </div>
        <img src={image} className="card-img-top" alt="..." />
      </div>

      {/* `````````````````````````````````````````````````````````````````````` */}
      {/* `````````````````````````````````````````````````````````````````````` */}
      {/* `````````````````````````````````````````````````````````````````````` */}
      {/* `````````````````````````````````````````````````````````````````````` */}
      {/* `````````````````````````````````````````````````````````````````````` */}
      <section id="team" class="team section-bg">
        <div class="container" id="faculty">
          <div class="section-title">
            <h2>Faculty</h2>
            <div class="underline"></div>
            <p>
            Department of Business Administration
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={tabasum} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Tabassum Riaz</h4>
                  <span>Assistant Professor & Incharge Department</span>

                  <p> PhD (Scholar), CUST</p>
                  <p>MS/M.Phil (Finance), MAJU</p>
                  <p>B.com (Hons), PU Lahore</p>
                  <button className="btn"><a href="mailto:tabassumriaz@pujc.edu.pk.com"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>

                 

                  
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={sanaullah} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Hafiz Muhammad Sana Ullah</h4>
                  <span>Lecturer</span>
                  <p> PhD (Scholar) Islamic Studies, UOL</p>
                  <p> M.Phil Islamic Studies</p>
                  <p> M.A Islamic Studies, PU</p>
                  <button className="btn"><a href="mailto:m.sana.u@pujc.edu.pk.com"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>
                  
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={rana} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Rana Muhammad Nadim</h4>
                  <span>Lecturer</span>
                  <p>PhD Scholar (HRM) CUST</p>
                  <p>MPhil Business Administration NUML</p>
                  <p>M. Com, PU</p>
                  <button className="btn"><a href="mailto:rananadeem@pujc.edu.pk.com"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>
                  
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={haroon} className="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Haroon Iqbal</h4>
                  <span>Visit Lecturer</span>
                  <p>Msc Finance and investment , Brunel University</p>
                  <p>Bachelors of Business Administration</p>
                  <button className="btn"><a href="mailto:someone@example.com"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default UniverseDapartment;
