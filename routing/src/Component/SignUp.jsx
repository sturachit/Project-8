import React from 'react'
import { Link,useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
  return (
    <>
      
    <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Dashtreme Admin - Free Dashboard for Bootstrap 4 by Codervent</title>
    {/* loader*/}
    {/* <link href="../assets/css/pace.min.css" rel="stylesheet" /> */}
    {/*favicon*/}
    <link rel="icon" href="../assets/images/favicon.ico" type="image/x-icon" />
    {/* Bootstrap core CSS*/}
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
    {/* animate CSS*/}
    {/* <link href="../assets/css/animate.css" rel="stylesheet" type="text/css" /> */}
    {/* Icons CSS*/}
    <link href="../assets/css/icons.css" rel="stylesheet" type="text/css" />
    {/* Custom Style*/}
    <link href="../assets/css/app-style.css" rel="stylesheet" />
    {/* start loader */}
  <div className=''>
   <div style={{height:"700px"}}>
    <div id="" className='bg-light h-100 '>
      <div className="card card-authentication1  mx-auto ">
        <div className="card-body">
          <div className="card-content p-2">
            <div className="text-center">
              <img src="../../assets/images/logo-icon.png" alt="logo icon" />
            </div>
            <div className="card-title text-uppercase text-center py-3">
              Sign Up
            </div>
            <form action="#" method="post">
              <div className="mb-3"> 
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName" className="sr-only"> Name </label>
              <div className="position-relative has-icon-right">
                <input type="text" name="name" id="exampleInputName" className="form-control input-shadow" placeholder="Enter Your Name" />
                  <div className="form-control-position"><i className="icon-user" /></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmailId" className="sr-only"> Email ID </label>
                <div className="position-relative has-icon-right">
                  <input type="email" name="email" id="exampleInputEmailId" className="form-control input-shadow" placeholder="Enter Your Email ID" />
                  <div className="form-control-position"> <i className="icon-envelope-open" /> </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword" className="sr-only"> Password </label>
                <div className="position-relative has-icon-right">
                  <input type="password" name="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Choose Password" />
                  <div className="form-control-position">
                    <i className="icon-lock" />
                  </div>
                </div>
              </div>  
              <button type="submit" className="btn btn-light btn-block waves-effect waves-light" > Sign Up </button>
              <a href="/auth/google" className="btn btn-light btn-block waves-effect waves-light" > Sign up with Google</a>
            </form>
          </div>
        </div>
        <div className="card-footer text-center py-3">
          <a href="#"> Sign In here</a>
        </div>
      </div>
        <div className="position-absolute start-50 translate-middle">
        <button className='btn btn-danger mt-3 ms-2' onClick={() => navigate(-1)}>Back</button>
        <button className='btn btn-primary mt-3 ms-2' onClick={() => navigate(1)}>Next</button>
        </div>  
     </div>
    </div>
   
  </div>
    </div>
  </>
  )
}
