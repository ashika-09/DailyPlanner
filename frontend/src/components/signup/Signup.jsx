import React from "react";
import "./signup.css";
const Signup=()=>{
    return (
    <div className="signup">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column w-100 p-5">
                        <input className="p-2 my-3" 
                        name="email" type="email" 
                        placeholder="Enter your Email Id"/>

                         <input className="p-2 my-3" 
                        name="username" type="username" 
                        placeholder="Enter your Username"/>

                         <input className="p-2 my-3" 
                        name="password" type="password" 
                        placeholder="Enter your Password"/>

                        <button className="btn-signup p-2">Sign Up</button>

                      </div>
                    </div>
                   <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center" >
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