import "./css/Pages.css";
import image from "../images/pujc1.png";
import sanaullah from "../images/sana-ullah.jpg";
import sohail from '../images/sohail.jpeg';

import React, { useRef, useEffect, useState } from "react";

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
              <h1 className="opacity-100">Department of COMMERCE</h1>
              <p className="opacity-100 fw-bold fs-5">
              A set of comprehensive courses has been introduced to meet the needs of modern and expanding business environments. The student will have to study the following courses...
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
              <h1 className="opacity-100">Department of COMMERCE</h1>
              <p className="opacity-100 fw-bold fs-5">
              A set of comprehensive courses has been introduced to meet the needs of modern and expanding business environments. The student will have to study the following courses in various semesters in accordance with the Time Tables notified before the start of each semester. The College reserves the right of any suitable change at any time.
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
              <h1 className="opacity-100">Department of COMMERCE</h1>
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
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="d_info" >Department Information</h1>
          <p className="card-text text-center" >
          The program requirements can normally be completed in eight semesters over four years. The maximum duration for completion of the program is six years. However students exceeding four years will not be treated as regular students and will not be entitled to any facility normally available to regular students such as hostel accommodation, healthcare and transportation.
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
        <img src={image} className="card-img-top" alt="..." />
      </div>
      {/* `````````````````````````````````````````````````` */}
      <div
        class="card"
        className={`my-div card ${shouldAnimate ? "animate" : ""}`}
        ref={divRef}
        style={{ width: "84rem" }}
      >
        <img src={image} className="card-img-top" alt="..." />
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
            Department of Commerce
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={""} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Ms. Tooba Arshad</h4>
                  <span>Incharge of demartment, Lecturer</span>

                  <p> M.Phil (Commerce) Hailey college of commerce, PU</p>
                  <p>B.Com (Hons.) Hailey college of commerce, PU</p>

                 

                  
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={sohail} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Dr. Sohail Younus</h4>
                  <span>Lecturer</span>
                  <p> PhD (Commerce- Management) HCC</p>
                  <p> MCom Hons PU</p>
                  <p> BCom Hons PU</p>
                 
                </div>
              </div>
            </div>

            

            
          </div>
        </div>
      </section>
    </>
  );
}

export default UniverseDapartment;
