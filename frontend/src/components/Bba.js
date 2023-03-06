import React from "react";
import "./css/Bba.css";
import img from "../images/Bba/CsDepartment.png";
import img1 from "../images/Bba/sana-ullah.jpg";
import img2 from "../images/Bba/tabassum.jpeg";
import img3 from "../images/Bba/SirMubashir.jpeg";
import img4 from "../images/Bba/RizwanAbbas.jpg";

// import Footer from "./Footer";
const Bba = () => {
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
                Business <span>Administration</span>
              </h5>
              <p>
                The Department of Information Technology at PUJC has been
                established with the aim of providing state-of-the-art computer
                facilities to the students. Maintaining strong links with the
                industry....
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
          The Department of Information Technology at PUJC has been established
          with the aim of providing state-of-the-art computer facilities to the
          students. Maintaining strong links with the industry, the Faculty has
          designed such programmes that meet the ever-changing demands of
          workplace and professional development. These programmes equip the
          students with a broader and deeper understanding of the theory, design
          and application of computers to enable them to implement their novel
          ideas. Our students will ‘learn to learn’, so that they can readily
          adapt themselves to the field of computing as well as their work
          environment. In addition, they will have good oral and written
          communication skills, as well as a clear understanding of ethical
          issues relating to the computing profession.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil, quasi dolor ea adipisci, eius natus obcaecati quam aperiam autem molestiae fugit delectus qui fugiat, quas repellat. Pariatur laboriosam iusto possimus. Omnis ipsam velit culpa enim? Deserunt iure eius illum veniam suscipit exercitationem nesciunt natus perferendis? Nulla quidem sint dolor saepe voluptatem quam laboriosam libero, iste aperiam a ipsa veritatis.
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
      {/* <Footer/> */}
    </>
  );
};

export default Bba;
