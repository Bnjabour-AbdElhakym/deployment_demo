/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from 'react';
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
  const [isSticky, setIsSticky] = useState(false);
  const form = useRef();



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




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

        <div className="icons">
          <div className="parenticon">
            <div className="childicon">
              <img src="imgs/facebook.svg" alt="" width={"20"} style={{ margin: "4px 4px" }} />
            </div>
            <div className="childicon">
              <img src="imgs/instagram.svg" width={"18"} alt="" style={{ margin: "6px 6px" }} />
            </div>

            <div className="childicon">
              <img src="imgs/whatsapp.svg" width={"18"} alt="" style={{ margin: "6px 6px" }} />
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

              <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;contact@Artiweb.ma&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;contact@Artiweb.ma&nbsp;</span>
              </button>

            </div>
          </div>
        </div>

        <div className="line"></div>

        {/* nv nAV */}
        <div className={isSticky ? "parent_active" : "parent-nav"}>

          <div className="logo">
            <img src="imgs/lg.png" width="100px" />
          </div>



          <ul className="link">
            <li><a href="" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="min">
            <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Inscription</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Inscription</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form action="#" method="post">
                      <div class="mb-3">
                        <label for="f_name" class="form-label">Full Name</label>
                        <input type="email" class="form-control" name="f_name" id="f_name" placeholder="Full Name" />
                      </div>

                      <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="example@email.com" />
                      </div>

                      <div class="mb-3">
                        <label for="phone_number" class="form-label">Phone Number</label>
                        <input type="text" name="phone_number" id="phone_number" class="form-control" placeholder="+2126 110 008 21" />
                      </div>

                      <div class="mb-3">
                        <label for="bearth" class="form-label">Your Bearthday</label>
                        <input type="date" class="form-control" name="bearth" id="bearth" placeholder="Your Bearthday" />
                      </div>

                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn" data-bs-dismiss="modal">Annuler</button>
                    <button type="submit" className="btn">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


      </header>
      {/* end nvNAv */}
      <main>
        {/* img acuueil */}
        <div className="img_acc">
          <img src="imgs/Blue White Moder Playful Back to School Banner.png" className="ima-fluid" alt="" />
        </div>

        {/* end image */}

        {/* div link inscription */}

        <div className="parent-div-inscri" data-bs-toggle="modal" data-bs-target="#exampleModal">

          <div className="div-inscri-h6">
            <h6>inscription</h6>
          </div>

          <div className="div-inscri">
            <i className="fa-solid fa-right-to-bracket" style={{ color: "#ffffff" }}></i>
          </div>

        </div>
        {/* end div link inscription */}

        {/* div link pour scrole in page*/}
        <div className="parent-scrole-div">
          <div className="div-scrol">
            <a href="#scrole">
              <i className="fa-solid fa-arrow-down-long"></i>
            </a>


          </div>
        </div>

        {/* end link pour scrole in page */}

        <div className="container lg-container">
          <div className="d-flex  gap-3 aling-items-center">
            <div className="my-5">
              <h2 className="sm-text-center" style={{ color: "#5087cd" }}>A Propos de Nous</h2>
              <p className="mt-4" style={{ lineHeight: "2rem", marginRight: "7px" }}>
                l'école primaire FirstSchool est un lieu où l'éducation va au-delà des salles de classe, où les élèves apprennent non seulement des concepts académiques, mais aussi des valeurs humaines essentielles. C'est un endroit où la curiosité est encouragée, où les liens sont tissés et où les rêves prennent leur envol. Chez Lumière d'Apprendre, chaque enfant est guidé vers le chemin de la découverte de soi et du monde qui les entoure, préparant ainsi le terrain pour une vie riche de sens et de réussite.
              </p>
              <button className="learn-more" id="LrBtn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
            <div className="img">
              <img src="imgs/right-side-image.gif" alt="study gif" className="w-sm-50 sm-mx-auto" />
            </div>
          </div>
        </div>

        {/* video */}

        <div className="vid">
          <video src="https://web.facebook.com/FirstSchoolFes/videos/840862024286675">
          </video>
        </div>

        {/* end video */}




        {/* pleace for the cards */}
        <div id="offre" className="Cards-Container d-md-flex flex-row-reverse justify-content-evenly mx-4 my-3">
          <div className="card-content mx-4 my-5">
            <h1 className="Card-header-img text-center">First Primary School</h1>
            <p className="mx-5 my-3" style={{ lineHeight: "2.5rem" }}>
              l'école primaire FirstSchool est un lieu où
              les rires résonnent, les esprits s'épanouissent
              et les liens se tissent. C'est un endroit où chaque
              enfant est encouragé à briller dans sa propre lumière,
              à explorer le monde qui l'entoure et à préparer
              le terrain pour un avenir rempli de succès
              et de réalisations.
            </p>

            <button className="learn-more ms-5 card_btn" id="LrBtn">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text" id="scrole">Learn More</span>
            </button>
          </div>

          <div className="image-container sm-w-50 align-end">
            <img src="imgs/small-boy-reading-book.jpg" className="w-25 sm-w-100" style={{ minWidth: "25rem" }} alt="smiling girl studying home" />
          </div>
        </div>
        {/* end of cards */}


        {/* slider  */}
        <div className="imgae_slider" id="imgs">
          <h2 className="slide-h4" >Slide Section</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={6}
            slidesPerView={3}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            style={{ width: "auto", height: "250px", margin: "10px 64px" }}
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
        {/* end of slider */}

        {/* Contact section */}
        <h1 align="center" className="mb-2 mt-4">Contact Section</h1>
        <div className="container d-md-flex justify-content-center my-3">
          <form action="#" method="post" className="w-100 card p-3 m-3 h-50 w-sm-100" ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label for="full_name" className="form-label">Nom Prénom *</label>
              <input type="text" className="form-control" name="full_name" id="full_name" placeholder="Your Full Name" />
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">Email *</label>
              <input type="email" className="form-control" name="email" id="email" placeholder="email.example@mail.com" />
            </div>

            <div className="mb-3">
              <label for="msg" className="form-label">Message *</label>
              <textarea className="form-control" name="msg" id="msg" rows="3"></textarea>
            </div>

            <button className="btn btn-danger w-50 justify-content-end" type="submit">Envoyer</button>
          </form>

          <div className="map-form m-2 w-100">
            <iframe className="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2276595979383!2d-5.002454225620211!3d34.038030818482916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b73ec23f32f%3A0x2f5183c1d50c3d09!2sArti%20web%20%3A%20Agence%20de%20Communication%20et%20Marketing%20Digital%20-%20F%C3%A8s!5e0!3m2!1sen!2sma!4v1692565193081!5m2!1sen!2sma" width={"100%"} height="450" style={{ border: "0", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        {/* end Contact section */}
      </main >

      <footer className="bg-dark text-light p-4 d-lg-flex d-md-flex justify-content-evenly gap-3 align-items-center d-sm-block">
        <div className="text-center lg-25 sm-100 p-3" style={{ minWidth: "33%" }}>
          <div className="logo d-flex">
            <img src="imgs/lg.png" className="mx-auto w-50" />
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
              <i><img src="facebook.svg" width={"25px"} style={{ margin: "3px 2.8px" }} alt="instagram" /></i>
            </div>

            <div className="childicon">
              <i><img src="whatsapp-circle.svg" width={"25px"} style={{ margin: "3px 2.8px" }} alt="instagram" /></i>
            </div>

            <div className="childicon">
              <i><img src="instagram-circle.svg" width={"25px"} style={{ margin: "3px 2.8px" }} alt="instagram" /></i>
            </div>
          </div>
        </div>
      </footer>

    </div >
  );
}



