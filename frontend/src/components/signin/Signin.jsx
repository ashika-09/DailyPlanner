import React from "react";
import "./signin.css"; // Create this file for styling

const SignIn = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="row">
          {/* Left side: Form */}
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3"
                name="email"
                type="email"
                placeholder="Enter your Email Id"
              />

              <input
                className="p-2 my-3"
                name="password"
                type="password"
                placeholder="Enter your Password"
              />

              <button className="btn-signin p-2">Sign In</button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
            <img
              src="https://st5.depositphotos.com/4678277/76721/i/600/depositphotos_767211264-stock-photo-vertical-photo-collage-serious-man.jpg"
                    alt="/"
              className="img-fluid signin-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
