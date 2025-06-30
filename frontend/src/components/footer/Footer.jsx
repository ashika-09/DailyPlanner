import React from "react";

const Footer = ()=>{
     return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} DailyPlanner. All rights reserved.</p>
        <p className="mb-0">
          Designed & Developed by Ashika Verma.
        </p>
      </div>
    </footer>
  );
}
export default Footer;