import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bootstrap Project</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymo us"  referrerPolicy="no-referrer" / >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <style dangerouslySetInnerHTML={{
   __html:"\n    :root {\n      --bs-dark: #212529;\n    }\n\n    .theme-container {\n      width: 70px;\n      height: 70px;\n      border-radius: 50%;\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: 0.5s;\n    }\n\n    .theme-container:hover {\n      opacity: 0.8;\n    }\n\n    .shadow-dark {\n      background: linear-gradient(145deg, #23282c, #1e2125);\n      box-shadow: 17px 17px 23px #1a1d20,\n        -17px -17px 23px #282d32, inset 5px 5px 4px #1e2226,\n        inset -5px -5px 4px #24282c;\n    }\n\n    .shadow-light {\n      box-shadow: 7px 7px 15px -10px #bbcfda, -4px -4px 13px #ffffff,\n        inset 7px 7px 3px rgba(209, 217, 230, 0.35),\n        inset -11px -11px 3px rgba(255, 255, 255, 0.3)\n    }\n\n    @keyframes change {\n      0% {\n        transform: scale(1);\n      }\n\n      100% {\n        transform: scale(1.4);\n      }\n    }\n\n    .change {\n      animation-name: change;\n      animation-duration: 1s;\n      animation-direction: alternate;\n    }\n  ",
 }}
 />
        <div className="container   h-50">
          <div className="row">
            <div className="col-xl-3 col-md-6 mt-3 ">
              <div className="card card-stats  bg-info">
                <div className="card-body">
                  <div className="row">
                    <div className="col ">
                      <h5 className="card-title text-uppercase text-muted mb-0 text-center">
                        New Orders
                      </h5>
                      <span className="h2 font-weight-bold mb-0">300</span>
                      <i
                        className="fa-sharp fa-solid fa-bag-shopping fs-1 opacity-25 "
                        style={{ marginLeft: 150 }}
                      />
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i className="ni ni-active-40" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-white mr-2">
                      <i className="fa fa-arrow-up ms-4 text-primary-emphasis" />{" "}
                      3.48%
                    </span>
                    <span className="text-nowrap ">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mt-3">
              <div className="card card-stats bg-success">
                <div className="card-body ">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0 text-center">
                        Bounce Rate
                      </h5>
                      <span className="h2 font-weight-bold mb-0">53%</span>
                      <i
                        className="fa-sharp fa-solid fa-chart-simple fs-1 opacity-25"
                        style={{ marginLeft: 140 }}
                      />
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i className="ni ni-chart-pie-35" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-white mr-2">
                      <i className="fa fa-arrow-up ms-4 text-primary-emphasis" />{" "}
                      5%
                    </span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mt-3">
              <div className="card card-stats bg-warning">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0 text-center">
                        User Registration
                      </h5>
                      <span className="h2 font-weight-bold mb-0">44</span>
                      <i
                        className="fa-solid fa-user-plus  fs-1 opacity-25"
                        style={{ marginLeft: 150 }}
                      />
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i className="ni ni-money-coins" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-white mr-2">
                      <i className="fa fa-arrow-up ms-4 text-primary-emphasis" />{" "}
                      10.5%
                    </span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mt-3">
              <div className="card card-stats bg-danger mb-4 ">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0 text-center">
                        Unique Visitors
                      </h5>
                      <span className="h2 font-weight-bold mb-0">65</span>
                      <i
                        className="fa-solid fa-chart-pie fs-1 opacity-25"
                        style={{ marginLeft: 150 }}
                      />
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i className="ni ni-chart-bar-32" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-white mr-2">
                      <i className="fa fa-arrow-up ms-4 text-primary-emphasis" />{" "}
                      2%
                    </span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop:"300px",display:"flex",justifyContent:"center"}}>
        <button className='btn btn-danger mt-3 ms-2' onClick={() => navigate(-1)}>Back</button>
        <button className='btn btn-primary mt-3 ms-2' onClick={() => navigate(1)}>Next</button>
        </div>
        
      </>
    </div>
    
  );
}
