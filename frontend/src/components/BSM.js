import React from "react";
import "./css/Bba.css";
import img from "../CsDepartment.png";
import img1 from "../MadamNadia.jpg";
import img2 from "../SirKamran.png";
import img3 from "../SirMubashir.jpeg";
import img4 from "../RizwanAbbas.jpg";

import Footer from './Footer';

const BSM = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                Department of <span>ADMINISTRATIVE SCIENCE</span>
              </h5>
              <p>
              The curriculum of Bachelor of Science (4 years) in Management program reflects the latest approaches in management education which prepares individuals to take professional positions in public, non-profit and private organizations.
              </p>

              <div className="slider-btn">
              <a href="#it">
                <button className="btn btn-1" id="btn-clr">
                  
                  Read More
                </button></a>

                <a href="#faculty"><button className="btn btn-2" id="btn-clr">
                  
                  Faculty
                </button></a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
      {/* ````````````````````Section`````````````````````````` */}

      <div className="container">
        <h3 className="read" id="it">
        BUSINESS ADMINISTRATION
        </h3>
        <p className="read_para">
        The curriculum of Bachelor of Science (4 years) in Management program reflects the latest approaches in management education which prepares individuals to take professional positions in public, non-profit and private organizations. The Institute of Administrative Sciences takes pride in this unique program, launched in 2001, which has recently been revised and brought in line with HEC’s roadmap for business and management education. University of the Punjab, Jhelum Campus introduced BS(Hons) in Management in 2017. The BS Management degree, in its academic standing, is at par with North American and European Universities’ Bachelor’s degree programs.
        </p>
        <hr className="mt-5" />
      </div>
      <div className="container">
        <h3 className="read" id="it">
        Requirement
        </h3>
        <p className="read_para">
        Students with F.A./F.Sc./A Levels or equivalent qualification with at least 50% marks and age not more than 24 years are eligible for admission. The admission merit is calculated using weightage of marks obtained in Matric and F.A./F.Sc./A Levels. In case a candidate has passed F.A./F.Sc./A Levels. or equivalent in previous years, 2% marks for each session are deducted from marks obtained out of 100. There are no age and session restrictions in case of students seeking admission to BS program run on self-supporting basis.
        </p>
        <hr className="mt-5" />
      </div>
      <div className="container">
        <h3 className="read" id="it">
        Career
        </h3>
        <p className="read_para">
        This program prepares students with complete arena of knowledge, skills, attitude and experience that will equip them for leadership roles required by the society at large . The BS Management degree, in its academic standing, is at par with a USA Bachelor’s degree. The graduates of BS program are eligible for admission to MPA / MS / MPhil leading to PhD programs of IAS and graduate programs of other national and foreign universities. The designed curriculum not only help aspirants wishing to appear in CSS and PMS examinations but also assist in career development through specialized courses which are of value at home and abroad.
        </p>
        <hr className="mt-5" />
      </div>
      <div className="container">
        <h3 className="read" id="it">
        Structure
        </h3>
        <p className="read_para">
        The program requirements can normally be completed in eight semesters over four years. The maximum duration for completion of the program is six years. However students exceeding four years will not be treated as regular students and will not be entitled to any facility normally available to regular students such as hostel accommodation, healthcare and transportation.
        </p>
        <hr className="mt-5" />
      </div>

      {/* ````````````````````Faculty`````````````````````````` */}
      {/* <div className="container">
        <h3 className="read" id="faculty">Faculty</h3>
        <div className="container">
        <div className="row">
        <div className="col-4 img-set">
        <img src={img1} alt="CS Department HOD" />
        </div>
        <div className="col-6">
        <h3>Nadia Mumtaz</h3>
        </div>
        </div>
        </div>
        
    </div> */}
      <div className="container">
        <h3 className="read" id="faculty">
          Faculty
        </h3>

        <div className="container d-flex justify-content-between">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>Nadia Mumtaz</h4>
                <h5>Incharge Department</h5>
                Ph.D (Scholar) Computer Science, IQRA University
                MS Information Security (NUST)
                MCS, KUST
                <br />
                Research Interests
                <br />
                <a href="mailto:nadia.it@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem"}}>
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>Kamran Shaukat Dar</h4>
                <h5>Lecturer</h5>
                Ph.D Scholar(Computer Science)
                MSCS(Gold medalist)
                BS Computer Science (PUCIT)
                <br />
                Research Interests
                <br />
                <a href="mailto:Kamran@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>M. Mubashar Hussain</h4>
                <h5>Lecturer</h5>
                M. Phil Mathematics (CUST)
                M. Sc. Mathematics (PU)
                Research Interests
                <br />
                <a href="mailto:mubashar@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>M. Mubashar Hussain</h4>
                <h5>Lecturer</h5>
                M. Phil Mathematics (CUST)
                M. Sc. Mathematics (PU)
                Research Interests
                <br />
                <a href="mailto:mubashar@pujc.edu.pk">Email Address</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BSM;
