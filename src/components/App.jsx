import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '../style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { delay } from "q";

export default function App() {
  return (
    <div>
      
        <header>

          {/* nv nAV */}
          <div className="parent">

<div className="logo">
    <img src="logo.svg" width="80px"/>
</div>
  <h4> <span>ARTI</span> WEb SCHOOL</h4>

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
  <i class="fa-brands fa-facebook"></i>
  </div>
  <div className="childicon">
  <i class="fa-brands fa-youtube"></i>
  </div>
  
  <div className="childicon">
  <i class="fa-brands fa-square-whatsapp"></i>
  </div>

  <div className="childicon">
  <i class="fa-brands fa-square-instagram"></i>
  </div>

  <div className="contact-icon">

  <div className="childicon">
  <i class="fa-solid fa-phone"></i>
  </div>

    <button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;0672907661&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;0672907661&nbsp;</span>
</button>



  <div className="childicon">
  <i class="fa-solid fa-envelope"></i>
  </div>



 <button data-text="Awesome" class="button">
    <span class="actual-text">&nbsp;contact@Artiweb.ma&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;contact@Artiweb.ma&nbsp;</span>
</button>


  </div>
  

    </div>
</div>

          {/* end nvNAv */}
      <div className="container lg-container">
          <main>
            {/* Youssef Code */}
            <div className="imgae_slider" id="imgs">
              <Swiper
                modules={[Pagination,Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
             
                autoplay={{delay:2000}}
                pagination={{ clickable: true }}
                

                style={{ width: "auto", height: "600px" ,margin:"10px 10px" }}
              >
                <SwiperSlide style={{ width: "100%", height: "auto" }}>
                  <img src="photo1.jpg" alt="" style={{ width: "100%" , height: "100%" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "auto" }}>
                  <img src="photo2.jpg" alt="" style={{ width: "100%" , height: "100%" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "auto" }}>
                  <img src="photo3.jpg" alt="" style={{ width: "100%" , height: "100%" }} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "auto" }}>
                   <img src="photo4.jpg" alt="" style={{ width: "100%" , height: "100%" }}  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* pleace for the cards */}
            <div id="offre" className="Cards-Container d-flex flex-wrap gap-4 my-3 justify-content-center">
              <div className="card text-center" style={{ width: "18rem" }}>
                <img src="default.png" className="card-img-top" alt="cardImage" />
                <div className="card-body">
                  <h5 className="card-title">The title of the blog</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card text-center" style={{ width: "18rem" }}>
                <img src="default.png" className="card-img-top" alt="cardImage" />
                <div className="card-body">
                  <h5 className="card-title">The title of the blog</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card text-center" style={{ width: "18rem" }}>
                <img src="default.png" className="card-img-top" alt="cardImage" />
                <div className="card-body">
                  <h5 className="card-title">The title of the blog</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="card text-center" style={{ width: "18rem" }}>
                <img src="default.png" className="card-img-top" alt="cardImage" />
                <div className="card-body">
                  <h5 className="card-title">The title of the blog</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum neque cumque nulla praesentium esse?
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </main>
      </div>
        </header>
    </div>
  );
}



