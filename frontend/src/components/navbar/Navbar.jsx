import React from "react";
import "./navbar.css";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom";


const Navbar=()=>{
    return (
 <div>
        <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <Link className="navbar-brand" to="#"><b>
                <LuNotebookPen /> &nbsp;  DAILY PLANNER
                </b>
                </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                <Link className="nav-Link active" aria-current="page" to="#" >Home</Link>
                </li>  

                <li className="nav-item mx-2">
                <Link className="nav-Link active" aria-current="page" to="/about">About Us</Link>
                </li> 

                 <li className="nav-item mx-2">
                <Link className="nav-Link active" aria-current="page" to="/task">Task</Link>
                </li>  

                <li className="nav-item mx-2 p-1">
                <Link className="nav-Link active btn-nav" aria-current="page" to="/signup">Sign Up</Link>
                </li>  
 
                <li className="nav-item mx-2 p-1"> 
                <Link className="nav-Link active btn-nav" aria-current="page" to="/signin">Sign In</Link>
                </li>  
 
                <li className="nav-item mx-2 p-1"> 
                <Link className="nav-Link active btn-nav" aria-current="page" to="#">Log Out</Link>
                </li>   

                
            </ul>         
         </div>
     </div>
     </nav>
</div>
    );
};


export default Navbar;