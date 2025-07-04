import React, { useState } from "react";
import "./signin.css"; // Create this file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import BASE_URL from "../../utils/url";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({ email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/api/v1/signin`, Inputs).then((response) => {
      sessionStorage.setItem("id", response.data.others._id);
      dispatch(authActions.login());
      history("/task");
    }).catch((error) => {
      console.log("Error:", error.response?.data);
    })
  };
  return (
    <div className="signin">
      <div className="container">
        <div className="row">
          {/* Left side: Form */}
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-3">
             <div>
               <h2 className="mb-2 text-center heading-signin">
                👋 Welcome Back!
              </h2>

              <p className="mb-4 text-center signin-description">
                Sign in to stay on top of your tasks and make every day productive!
              </p>
             </div>
              <input
                className="p-2 my-3"
                name="email"
                type="email"
                value={Inputs.email}
                placeholder="Enter your Email Id"
                onChange={change}
              />

              <input
                className="p-2 my-3"
                name="password"
                type="password"
                value={Inputs.password}
                placeholder="Enter your Password"
                onChange={change}
              />

              <button className="btn-signin p-2" onClick={submit}>Sign In</button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="d-lg-block d-none col-lg-4 column col-left d-flex justify-content-center align-items-center">
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
