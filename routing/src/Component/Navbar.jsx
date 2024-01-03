// Components/NavBar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
   <div className="container-fluid bg-success ">
          <div className="container  ">
            <div className="row  ">
              <div className="col-12  ">
                <nav className="navbar navbar-expand-lg bg-success   ">
                  <div className="container   " style={{marginLeft:"250px"}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse p-4"  id="navbarSupportedContent" >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active fs-3  text-white mx-2 fw-semibol" to="/"  > {" "} <i className="fa-solid fa-house text-dark me-1" />{" "} Home </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fs-3  text-white fw-semibol active mx-2 "to="/form" > Form </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fs-3 active fw-semibol text-white mx-2 " to="/list"  > <i className="fa-solid fa-table text-dark me-1" /> Table </Link> 
                        </li>
                  
                        <li className="nav-item">
                          <Link className="nav-link fs-3 active fw-semibol text-white mx-2  " to="/about" > <i className="fa-solid fa-user text-dark me-2" />About Us</Link>
                        </li>
                         <li className="nav-item">
                          <Link className="nav-link fs-3 fw-semibol active text-white  mx-1" to="/signup" ><i class="fa fa-sign-in text-dark me-1  " aria-hidden="true"></i> Sign Up </Link>
                        </li> 
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              {/* <div className="col-2 pt-5 ">
                <button className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                  <i className="fa-solid fa-list" />
                </button>
                <div className="offcanvas offcanvas-end bg-light" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-dark" id="offcanvasRightLabel" > Australia </h5>
                    <button type="button " className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                  </div>
                  <div className="card ms-3 rounded-bottom mb-2 " style={{ width: "22rem" }} >
                    <img src="/images/Koala.webp" className="card-img-top" alt="..." />
                   
                  </div>
                </div>
                <button type="button" className="btn btn- position-relative ms-2" >
                  <i className="fa-sharp fa-regular fa-bell  " style={{ fontSize: 30 }} />
                  <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle text-white p-1"> 10
                    <span className="visually-hidden " /></span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
