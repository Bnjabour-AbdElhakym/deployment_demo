import "../App.css";

export default function App() {
  return (
    <div>
      <div className="container-fluid lg-container">
        <header>
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
                    <a className="nav-link" href="#">Features</a>
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
          <main>
            {/* Youssef Code */}
            <div className="imgae_slider" id="imgs">

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
        </header>
      </div>
    </div>
  );
}
