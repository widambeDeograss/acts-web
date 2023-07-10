import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
