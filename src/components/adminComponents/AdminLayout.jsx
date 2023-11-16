import useBreakpoint from "@restart/hooks/useBreakpoint";
import React, { useState } from "react";
import {
  HiHome,
  HiMenu,
  HiMoon,
  HiPencilAlt,
  HiTruck,
  HiUsers,
  HiAdjustments,
  HiLogout,
  HiLockClosed
} from "react-icons/hi";
import IconButton from "./IconButton";
import { Outlet } from "react-router-dom";
// import Members from "../pages/Members";
import Nav from "./Nav";
import NavLink from "./NavLink";
// import Notifications from "./Notifications";
// import Orders from "../pages/Orders";
// import Products from "../pages/Products";
// import Profile from "../pages/Profile";
// import QueryWrapper from "./QueryWrapper";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Avatar from "./Avatar";
import Button from "./Button";
import Typography from "./Typography";
// import ProfileMenu from "./ProfileMenu";

const links = [
  { icon: HiHome, label: "Home", to: "AdminHome" },
  { icon: HiUsers, label: "Applications", to: "Applications" },
  { icon: HiPencilAlt, label: "Events", to: "events" },
  { icon:HiUsers , label: "User Contacts", to: "contacts" },
  { icon:HiLockClosed , label: "Change Password", to: "change_password" },
];

export default function AdminLayout(props) {
  const [open, setOpen] = useState(false);
  const isSmall = useBreakpoint("sm", "down");

  return (
    <div className="flex font-syne">
      <Sidebar
        open={open}
        setOpen={setOpen}
        title={
          <div className="flex items-center">
            <Avatar bg="primary" className="mr-3">
              <Logo size={24} />
            </Avatar>{" "}
            Acts Admin
          </div>
        }
      >
        <Nav orientation="vertical">
          {links.map((link) => (
            <NavLink key={link.to} onClick={() => setOpen(false)} to={link.to}>
              <link.icon className="mr-4" size={20} />
              {link.label}
            </NavLink>
          ))}
        </Nav>
        <span className="flex-grow" />
        <div className="flex items-center">
          {/* <Notifications /> */}
         <Button className="flex items-center lg:mb-3"
         onClick={() => {
          localStorage.clear()
          window.location.reload()
         }}
         >

            <HiLogout />
          <Typography>Logout</Typography>
         </Button>
        </div>

        {/* <ProfileMenu /> */}
      </Sidebar>
      <main className="flex-grow">
        {isSmall &&(
          <header className="flex items-center justify-between px-4 py-4">
            <IconButton className="-ml-2" onClick={() => setOpen(true)}>
              <HiMenu />
            </IconButton>
          </header>
        )}
           <div className="lg:-ml-24 md:-ml-20">
           <Outlet />
           </div>
      </main>
    </div>
  );
}
