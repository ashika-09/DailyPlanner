import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../utils/url";

const Signup = () => {
   
    const history = useNavigate();
    const [Inputs, setInputs] = useState({ email: "", username: "", password: "" });
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    }
    const submit = async (e) => {
        e.preventDefault();
        await axios.post(`${BASE_URL}/api/v1/register`, Inputs).then((response) => {
            if (response.data.message === "User already exist") {
                alert(response.data.message);
            } else {
                alert(response.data.message);
                sessionStorage.removeItem("id");
                setInputs({ email: "", username: "", password: "" });
                history("/signin");
            }
        });

    };
    return (
        <div className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column w-100 p-3">
                            <div>
                                <h2 className="mb-2 text-center heading-signup">
                                ✏️ Daily Planner - Sign Up
                            </h2>

                            <p className="mb-4 text-center signup-description">
                                Plan your day, achieve more — join us today!
                            </p>
                            </div>
                            <input className="p-2 my-3"
                                name="email" type="email"
                                placeholder="Enter your Email Id"
                                value={Inputs.email}
                                onChange={change} />

                            <input className="p-2 my-3"
                                name="username" type="username"
                                placeholder="Enter your Username"
                                value={Inputs.username}
                                onChange={change} />

                            <input className="p-2 my-3"
                                name="password" type="password"
                                placeholder="Enter your Password"
                                value={Inputs.password}
                                onChange={change} />

                            <button className="btn-signup p-2" onClick={submit}>Sign Up</button>

                        </div>
                    </div>
                    <div className="d-lg-block d-none col-lg-4 column col-left d-flex justify-content-center align-items-center" >
                        <img
                            src="https://st4.depositphotos.com/13349494/37852/i/600/depositphotos_378523974-stock-photo-cropped-view-woman-writing-planner.jpg"
                            alt="/"
                            className=" signup-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;