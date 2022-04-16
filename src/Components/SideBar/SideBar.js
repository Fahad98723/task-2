import React from "react";
import { useState } from "react";
import "./SideBar.css";
import { MdDashboard } from "react-icons/md";
import { RiFileMarkLine } from "react-icons/ri";
import { MdOutlineInsertChart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {
  Link,
  NavLink,
  NavNavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ToggleSideBar from "./ToggleSideBar";
import Content from "../Content/Content";
import logo from '../../Assets/logo.png'

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
    <ToggleSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}></ToggleSideBar>
      <div className=" grid grid-cols-6 gap-0 bg-white">
        <div className=" hidden  lg:block">
        <div >
      <div className="logo flex items-center ml-4 mt-5 mb-12" >
        <img src={logo} alt="" />
      </div>

      <div className="menu justify-start">
        <NavLink  to='/home' activeClass = 'active'className="menu-item flex items-center gap-3">
          {" "}
          <MdDashboard></MdDashboard> Dashboard{" "}
        </NavLink>
        <h3   className="menu-item flex items-center gap-3">
          {" "}
          <RiFileMarkLine></RiFileMarkLine> Courses{" "}
        </h3>
        <NavLink  to='/accountancy' activeClass = 'active' className="menu-item flex items-center gap-3">
          <MdOutlineInsertChart></MdOutlineInsertChart> Accountancy{" "}
        </NavLink>
        <h3   className="menu-item flex items-center gap-3">
          <CgProfile></CgProfile> My Profile{" "}
        </h3>
        <h3  className="menu-item flex items-center gap-3">
          <IoIosNotificationsOutline></IoIosNotificationsOutline>Notification{" "}
          <span className="bg-red-300 p-1 rounded-full text-xs text-red-700">49</span>
        </h3>
        <h3   className="menu-item flex items-center gap-3">
          <AiFillSetting></AiFillSetting> Setting{" "}
        </h3>
        <h3   className="menu-item flex items-center gap-3">
          {" "}
          <FiLogOut></FiLogOut> Log Out{" "}
        </h3>
        
      </div>
    </div>
        </div>
        <div
          style={{ background: " #FAFAFB" }}
          className="  col-span-6 lg:col-span-5 "
          onClick={() => setShowSidebar(false)}
        >

          <Routes >
              <Route path="/" element={<Content />} />
        </Routes>
        <Outlet>
          <Routes> </Routes>
        </Outlet>
        </div>
      </div>

    </>
    
  );
};

export default SideBar;
