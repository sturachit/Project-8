import React from 'react'
import { Link,useNavigate } from "react-router-dom";


export default function AboutUs() {
  const navigate = useNavigate();
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>carousal</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        :root {\n            --bs-dark: #212529;\n        }\n\n        .theme-container {\n            width: 70px;\n            height: 70px;\n            border-radius: 50%;\n            position: fixed;\n            bottom: 20px;\n            right: 20px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            transition: 0.5s;\n        }\n\n        .theme-container:hover {\n            opacity: 0.8;\n        }\n\n        .shadow-dark {\n            background: linear-gradient(145deg, #23282c, #1e2125);\n            box-shadow: 17px 17px 23px #1a1d20,\n                -17px -17px 23px #282d32, inset 5px 5px 4px #1e2226,\n                inset -5px -5px 4px #24282c;\n        }\n\n        .shadow-light {\n            box-shadow: 7px 7px 15px -10px #bbcfda, -4px -4px 13px #ffffff,\n                inset 7px 7px 3px rgba(209, 217, 230, 0.35),\n                inset -11px -11px 3px rgba(255, 255, 255, 0.3)\n        }\n\n        @keyframes change {\n            0% {\n                transform: scale(1);\n            }\n\n            100% {\n                transform: scale(1.4);\n            }\n        }\n\n        .change {\n            animation-name: change;\n            animation-duration: 1s;\n            animation-direction: alternate;\n        }\n    "
    }}
  />
  <div className="container">
    <div className="row">
      <div className="col-8 m-auto">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/1.jpg"
                className="d-block w-100 object-fit-fill border rounded"
                style={{ height: 500 }}
                alt="photo"
              />
              <div className="carousel-caption d-none d-md-block">
                <p>Technology News</p>
                <button className="btn btn-danger">Technology</button>
                <button className="btn btn-primary">Web Development</button>
                <button className="btn btn-success">Tech Fun</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/2.jpg"
                className="d-block w-100 object-fit-fill border rounded"
                style={{ height: 500 }}
                alt="photo"
              />
              <div className="carousel-caption d-none d-md-block">
                <p>Development </p>
                <button className="btn btn-danger">Technology</button>
                <button className="btn btn-primary">Web Development</button>
                <button className="btn btn-success">Tech Fun</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/3.jpg"
                className="d-block w-100 object-fit-fill border rounded"
                style={{ height: 500 }}
                alt="photo"
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="text-info-emphasis fs-2"> Trends</p>
                <button className="btn btn-danger">Technology</button>
                <button className="btn btn-primary">Web Development</button>
                <button className="btn btn-success">Tech Fun</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div style={{marginTop:"20px",display:"flex",justifyContent:"center"}}>
        <button className='btn btn-danger mt-3 ms-2' onClick={() => navigate(-1)}>Back</button>
      <button className='btn btn-primary mt-3 ms-2' onClick={() => navigate(1)}>Next</button>
        </div>
       
</>

    );
}
