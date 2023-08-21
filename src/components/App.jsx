/* eslint-disable jsx-a11y/iframe-has-title */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '../style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { delay } from "q";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';








export default function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ji33ga', 'template_1ci9tdm', form.current, 'UEpaXmQJwpbBaVu4z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  
  return (
    <div>

      <header>
        {/* nv nAV */}
        <div className="parent">

          <div className="logo">
            <img src="logo.svg" width="80px" />
          </div>
          <h4> <span className="logo-text">ARTI</span> WEb SCHOOL</h4>

          <ul className="link">
            <li><a href="" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="line"></div>

          <div className="min">
            {/* <button className="btn">Inscription</button> */}
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Inscription
            </a>

          </div>
        </div>

        <div className="icons">
          <div className="parenticon">
            <div className="childicon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="childicon">
              <i className="fa-brands fa-youtube"></i>
            </div>

            <div className="childicon">
              <i className="fa-brands fa-square-whatsapp"></i>
            </div>

            <div className="childicon">
              <i className="fa-brands fa-square-instagram"></i>
            </div>

            <div className="contact-icon">
              <div className="childicon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;0672907661&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;0672907661&nbsp;</span>
              </button>

              <div className="childicon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <button data-text="Awesome" class="button">
                <span className="actual-text">&nbsp;contact@Artiweb.ma&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;contact@Artiweb.ma&nbsp;</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* end nvNAv */}
      <main>
        <div className="container lg-container">
          {/* Youssef Code */}
          <div className="imgae_slider" id="imgs">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              style={{ width: "auto", height: "600px", margin: "10px 10px" }}
            >
              <SwiperSlide style={{ width: "100%", height: "auto" }}>
                <img src="photo1.jpg" alt="" style={{ width: "100%", height: "100%" }} />
              </SwiperSlide>
              <SwiperSlide style={{ width: "100%", height: "auto" }}>
                <img src="photo2.jpg" alt="" style={{ width: "100%", height: "100%" }} />
              </SwiperSlide>
              <SwiperSlide style={{ width: "100%", height: "auto" }}>
                <img src="photo3.jpg" alt="" style={{ width: "100%", height: "100%" }} />
              </SwiperSlide>
              <SwiperSlide style={{ width: "100%", height: "auto" }}>
                <img src="photo4.jpg" alt="" style={{ width: "100%", height: "100%" }} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="d-flex gap-3 mt-4">
            <div className="my-4">
              <h2 align="center">School <br /> <span className="ms-3">Informations</span></h2>
              <p className="mt-4" style={{ lineHeight: "2rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt esse eos, vero cumque, praesentium ea accusamus corporis doloremque accusantium enim. Beatae ea iure fugiat ex placeat et laboriosam animi possimus magnam voluptates dolorum eos commodi, labore sunt! Cupiditate ex eaque nulla odio dignissimos ad soluta optio illum quae libero!
              </p>
              <button className="learn-more" id="LrBtn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
            <div className="img">
              <img src="imgs/right-side-image.gif" alt="study gif" srcset="" />
            </div>
          </div>
        </div>

        {/* pleace for the cards */}
        <h2 align="center" className="my-3">The School Offres</h2>
        <div id="offre" className="Cards-Container d-flex flex-wrap gap-4 mt-3 mb-5 justify-content-center">
          <div className="card text-center" style={{ width: "20rem" }}>
            <img src="imgs/smiling-girl-studying-home.jpg" className="card-img-top" alt="smiling girl studying home" />
            <div className="card-body">
              <h5 className="card-title">Primary School</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
              </p>

              <button className="learn-more" id="LrBtn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>

          <div className="card text-center" style={{ width: "20rem" }}>
            <img src="imgs/high-school-girl.jpg" className="card-img-top" alt="high school girl" />
            <div className="card-body">
              <h5 className="card-title">High School</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
              </p>

              <button className="learn-more" id="LrBtn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>

          <div className="card text-center" style={{ width: "20rem" }}>
            <img src="imgs/college-student.jpg" className="card-img-top" alt="college student" />
            <div className="card-body">
              <h5 className="card-title">College</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
              </p>

              <button className="learn-more" id="LrBtn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </div>
        {/* end of cards */}

        {/* Contact section */}
        <h1 align="center" className="mb-2">Contact Section</h1>
        <div className="container d-flex justify-content-center gap-4 my-3">
          <form action="#" method="post" className="w-50 card p-3 h-50" ref={form} onSubmit={sendEmail}>
            <div class="mb-3">
              <label for="full_name" class="form-label">Name</label>
              <input type="text" class="form-control" name="full_name" id="full_name" placeholder="Your Full Name" />
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="email.example@mail.com" />
            </div>

            <div className="mb-3">
              <label for="msg" className="form-label">Your Massage</label>
              <textarea className="form-control" name="msg" id="msg" rows="3"></textarea>
            </div>

            <button class="btn btn-danger w-25 justify-content-end" type="submit">Send</button>
          </form>

          <div className="map-form">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2276595979383!2d-5.002454225620211!3d34.038030818482916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b73ec23f32f%3A0x2f5183c1d50c3d09!2sArti%20web%20%3A%20Agence%20de%20Communication%20et%20Marketing%20Digital%20-%20F%C3%A8s!5e0!3m2!1sen!2sma!4v1692565193081!5m2!1sen!2sma" width="600" height="450" style={{ border: "0", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        {/* end Contact section */}
      </main >

      <footer className="bg-dark text-light p-4 d-lg-flex d-md-flex justify-content-evenly gap-3 align-items-center d-sm-block">
        <div className="text-center lg-25 sm-100 p-3" style={{ minWidth: "33%" }}>
          <div className="logo d-flex">
            <img src="logo.svg" width="80px" />
            <h4 className="mt-3"> <span className="logo-text">ARTI</span> WEb SCHOOL</h4>
          </div>

          <div>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <small className="opacity-50">Copyriht ©️ {new Date().getFullYear().toString()} Arti All the rights reserved </small>
        </div>

        <div className=" lg-25 sm-100 p-3" style={{ minWidth: "33%" }}>
          <div className="mb-3">
            <i className="fa fa-location-dot"></i>
            <span className="ms-3">Avenue Mohammed es Slaoui, Fes</span>
          </div>
          <div className="mb-3">
            <i className="fa fa-phone"></i>
            <span className="ms-3">+212 60000 1122</span>
          </div>
          <div className="mb-3">
            <i className="fa fa-envelope"></i>
            <span className="ms-3">contact@artiweb.ma</span>
          </div>
          <div className="mb-3">
            <i className="fa-solid fa-globe"></i>
            <a href="http://www.artiweb.ma" target="_blank" className="ms-3" rel="noreferrer">www.artiweb.ma</a>
          </div>
        </div>

        <div className="text-center lg-25 sm-100 p-3" style={{ minWidth: "33%" }}>
          <h4>Company informations</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quam dolorem? Repudiandae distinctio quod nemo delectus placeat enim molestiae animi.
          </p>
          <div className="d-flex justify-content-center">
            <div className="childicon">
              <i className="fa-brands fa-facebook me-2"></i>
            </div>
            <div className="childicon">
              <i className="fa-brands fa-youtube me-2"></i>
            </div>

            <div className="childicon">
              <i className="fa-brands fa-square-whatsapp me-2"></i>
            </div>

            <div className="childicon">
              <i className="fa-brands fa-square-instagram me-2"></i>
            </div>
          </div>
        </div>
      </footer>

    </div >
  );
}



