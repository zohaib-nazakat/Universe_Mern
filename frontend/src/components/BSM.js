import "./css/Pages.css";
import image from "../images/pujc1.png";
import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import shazeena from "../images/shazeena.jpg";
import ghafoor from "../images/ghafoor.png";
import sohaib from "../images/Syedsohaib.jpg";
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
              <h1 className="opacity-100">Department of ADMINISTRATIVE SCIENCE</h1>
              <p className="opacity-100 fw-bold fs-5">
              The curriculum of Bachelor of Science (4 years) in Management program reflects the latest approaches in management education which prepares individuals to take professional positions in public, non-profit and private organizations.
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
              <h1 className="opacity-100">Department of ADMINISTRATIVE SCIENCE</h1>
              <p className="opacity-100 fw-bold fs-5">
              The curriculum of Bachelor of Science (4 years) in Management program reflects the latest approaches in management education which prepares individuals to take professional positions in public, non-profit and private organizations.
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
              <h1 className="opacity-100">Department of ADMINISTRATIVE SCIENCE</h1>
              <p className="opacity-100 fw-bold fs-5">
              The curriculum of Bachelor of Science (4 years) in Management program reflects the latest approaches in management education which prepares individuals to take professional positions in public, non-profit and private organizations.
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
          The curriculum of Bachelor of Science (4 years) in Management program reflects the latest approaches in management education which prepares individuals to take professional positions in public, non-profit and private organizations. The Institute of Administrative Sciences takes pride in this unique program, launched in 2001, which has recently been revised and brought in line with HEC’s roadmap for business and management education. University of the Punjab, Jhelum Campus introduced BS(Hons) in Management in 2017. The BS Management degree, in its academic standing, is at par with North American and European Universities’ Bachelor’s degree programs.
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
        <img src={image} className="card-img-top" alt="..." />
        <div class="card-body">
          <h1 class="d_req">Career</h1>
          <p class="p_req">
          This program prepares students with complete arena of knowledge, skills, attitude and experience that will equip them for leadership roles required by the society at large . The BS Management degree, in its academic standing, is at par with a USA Bachelor’s degree. The graduates of BS program are eligible for admission to MPA / MS / MPhil leading to PhD programs of IAS and graduate programs of other national and foreign universities. The designed curriculum not only help aspirants wishing to appear in CSS and PMS examinations but also assist in career development through specialized courses which are of value at home and abroad.
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
        <img src={university3} className="card-img-top" alt="..." />
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
            Department of ADMINISTRATIVE SCIENCE
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={ghafoor} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Dr. Muhammad Mudassar Ghafoor</h4>
                  <span>Associate Professor/Director Jhelum Campus</span>

                  <p> Ph.D (Management), University of Dundee, UK</p>
                  <p>M.Phill (Management), NUML, Islamabad</p>
                  <p>MBA (Marketing), University of Agriculture, Faisalabad</p>

                 

                  <button className="btn"><a href="mailto:administrator@pujc.edu.pk"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>
                </div>
              </div>
            </div>

            

            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={sohaib} class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Dr Syed Sohaib Zubair</h4>
                  <span>Assistant Professor (Adhoc)</span>
                  <p>Ph.D Administrative Sciences (Management)</p>
                  <p>M.Phil Management</p>
                  <button className="btn"><a href="mailto:sohaib.pujc@pu.edu.pk"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start">
                <div class="teampic">
                  <img src={shazeena} className="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>Shazeena</h4>
                  <span>Lecturer/Department In-Charge</span>
                  <p>MPA</p>
                  <p>MHRM</p>
                  <button className="btn"><a href="mailto:shazeena@pujc.edu.pk"  style={{color:'white', backgroundColor:'#009696', textDecoration:'none',padding:'5px 15px', borderRadius:'5px'}}>Email</a></button>
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
