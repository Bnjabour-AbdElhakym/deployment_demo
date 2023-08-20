/* eslint-disable jsx-a11y/iframe-has-title */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../style.css"

export default function App() {
  return (
    <div>
      <header>
        <div className="container-fluid lg-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand lg-justify-content-evenly" href="#">
                <img src="logo.svg" style={{ width: "4.5rem" }} alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto fs-5">
                  <li className="nav-item mx-3">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="#imgs">Features</a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="#offre">Offres</a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                </ul>
              </div>
              <div>
                <button className="btn btn-success">Inscription</button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="container-fluid lg-container">
          {/* Youssef Code */}
          <div className="imgae_slider" id="imgs">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}

              style={{ width: "80%", height: "500px" }}
            >
              <SwiperSlide style={{ width: "100%", height: "100%" }}>
                <img src="photo1.jpg" alt="" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="photo2.jpg" alt="" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="photo3.jpg" alt="" style={{ width: "100%" }} />
              </SwiperSlide>
              <SwiperSlide> <img src="photo1.jpg" alt="" style={{ width: "100%" }} />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* end image swiper */}

          <div className="container school-info d-flex gap-3 my-4">
            <div>
              <h2>School <br /><span className="ms-4">information</span></h2>
              <p className="mt-3" style={{ lineHeight: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto iure voluptas nostrum unde dolore ipsam tempora, sit doloremque quibusdam asperiores delectus dolorum ipsa nobis possimus quod? Minus ipsum eveniet id molestias, magni similique dolorem rem qui fuga quas, eum repellendus quae cumque officia tempora asperiores repudiandae itaque, temporibus blanditiis recusandae ad dignissimos? Accusantium possimus blanditiis quibusdam est nisi doloremque, nesciunt quis sapiente impedit voluptates numquam aut
              </p>

              <button class="learn-more" id="LrBtn">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
              </button>
            </div>
            <div className="img">
              <img src="imgs/right-side-image.gif" alt="study gif" srcset="" />
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

                <button class="learn-more" id="LrBtn">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Learn More</span>
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

                <button class="learn-more" id="LrBtn">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Learn More</span>
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

                <button class="learn-more" id="LrBtn">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Learn More</span>
                </button>
              </div>
            </div>
          </div>
          {/* end of cards */}

          {/* Contact section */}
          <h1 align="center" className="mb-2">Contact Section</h1>
          <div className="container d-flex justify-content-center gap-4 my-3">
            <form action="#" method="post" className="w-50 card p-3 h-50">
              <div class="mb-3">
                <label for="full_name" class="form-label">Name</label>
                <input type="text" class="form-control" name="full_name" id="full_name" placeholder="Your Full Name" />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Name</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="email.example@mail.com" />
              </div>

              <div class="mb-3">
                <label for="msg" class="form-label">Your Massage</label>
                <textarea class="form-control" name="msg" id="msg" rows="3"></textarea>
              </div>
            </form>

            <div className="map-form">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2276595979383!2d-5.002454225620211!3d34.038030818482916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b73ec23f32f%3A0x2f5183c1d50c3d09!2sArti%20web%20%3A%20Agence%20de%20Communication%20et%20Marketing%20Digital%20-%20F%C3%A8s!5e0!3m2!1sen!2sma!4v1692565193081!5m2!1sen!2sma" width="600" height="450" style={{ border: "0", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/* end Contact section */}
        </div>
      </main>

    </div >
  );
}
