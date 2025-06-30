import React from "react";
import "./Home.css"

const Home=()=>{
    return <div className="home d-flex justify-content-center align-items-center">
      <div className="container  d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">Organize Your <br/>Work and Life, finally</h1>
        <p>
        Become focused, organized,and calm with <br/>
        Task App. The World's no.1 task manager app
        </p>
        <button className="home-btn p-3">Add your Task</button>
      </div>
    </div>
};


export default  Home;
