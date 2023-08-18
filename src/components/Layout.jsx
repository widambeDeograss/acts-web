import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <div className="">
      <Footer /> 
      </div>
    </div>
  );
}

export default Layout;
