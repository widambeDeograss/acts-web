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
  HiLockClosed,
  HiBookOpen,
} from "react-icons/hi";
import IconButton from "./IconButton";
import { Outlet, useLocation } from "react-router-dom";
// import Members from "../pages/Members";
import Nav from "./Nav";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Avatar from "./Avatar";
import Button from "./Button";
import Typography from "./Typography";
import { showModal, selectModal, hideModal } from "../../App/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddStaffModal } from "../AddStafModal";
import { AddCoursesModal } from "../AddCorseModal";
import { AddministrationModal } from "../AddAddministrationModal";
import { AddFeeItemMasters } from "../AddFeeItemMasters";
import { PhdFeesItem } from "../PhdFeesItem";
import { AddGallery } from "../AddGallery";
// import ProfileMenu from "./ProfileMenu";

const links = [
  { icon: HiHome, label: "Home", to: "AdminHome" },
  { icon: HiUsers, label: "Applications", to: "Applications" },
  { icon: HiPencilAlt, label: "Events", to: "events" },
  { icon: HiBookOpen, label: "Courses", to: "courses" },
  { icon: HiUsers, label: "User Contacts", to: "contacts" },
  { icon: HiBookOpen, label: "Fee Structure", to: "fee_structure" },
  { icon: HiUsers, label: "ACTS staff", to: "staff" },
  { icon: HiUsers, label: "Administration", to: "administration" },
  { icon: HiLockClosed, label: "Change Password", to: "change_password" },
];

export default function AdminLayout(props) {
  const [open, setOpen] = useState(false);
  const isSmall = useBreakpoint("sm", "down");
  const dispatch = useDispatch();
  const location = useLocation(); 
  const { showModal: isModalVisible, modalType } = useSelector(selectModal);

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
            ACTS Admin
          </div>
        }
      >
        <Nav orientation="vertical">
          {links.map((link) => (
            <NavLink
              key={link.to}
              onClick={() => setOpen(false)}
              to={link.to}
              className={`${
                location.pathname.includes(link.to)? "bg-blue-600  text-white" : ""
              } hover:bg-blue-gray-300 hover:text-white text-xs w-44`}
            >
              <link.icon className="mr-2 text-xs" size={15} />
              {link.label}
            </NavLink>
          ))}
        </Nav>
        <span className="flex-grow" />
        <div className="flex items-center">
          {/* <Notifications /> */}
          <Button
            className="flex items-center lg:mb-3"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <HiLogout />
            <Typography className="text-xs">Logout</Typography>
          </Button>
        </div>

        {/* <ProfileMenu /> */}
      </Sidebar>
      <main className="flex-grow">
        {isSmall && (
          <header className="flex items-center justify-between px-4 py-4">
            <IconButton className="-ml-2" onClick={() => setOpen(true)}>
              <HiMenu />
            </IconButton>
          </header>
        )}
        <div className="lg:ml-52 md:ml-52  ">
          <Outlet />
        </div>
      </main>
      {isModalVisible && (
        <div>
          {/* Your modal content goes here based on the modalType */}
          {modalType === "staffsAdd" && <AddStaffModal />}
          {modalType === "courseAdd" && <AddCoursesModal />}
          {modalType === "administrationAdd" && <AddministrationModal />}
          {modalType === "feeItemMasters" && <AddFeeItemMasters />}
          {modalType === "feeItemPhd" && <PhdFeesItem />}
          {modalType === "galleryAdd" && <AddGallery />}
        </div>
      )}
    </div>
  );
}
