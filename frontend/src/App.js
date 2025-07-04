import React, { useEffect } from "react";
//import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Signup from "./components/signup/Signup";
import SignIn from "./components/signin/Signin";
import Task from "./components/task/Task";
import { authActions } from "./store";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/navbar";

const App=()=>{
   const dispatch=useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(()=>{
   const id=sessionStorage.getItem("id");
   if(id) dispatch(authActions.login());
  },[dispatch])
    return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isLoggedIn ? <Navigate to="/task" /> : <Home />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/task"
            element={
              isLoggedIn ? <Task /> : <Navigate to="/signin" />
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? <Navigate to="/task" /> : <Signup />
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ? <Navigate to="/task" /> : <SignIn />
            }
          />
        </Routes>
      </Router>
      
      <Footer/>
      
    </div>
    )
}


export default App;
