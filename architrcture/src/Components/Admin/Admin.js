import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Admin.css'
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaDatabase,
  FaUserCircle,
  FaBars,
  FaHome,
  FaProjectDiagram,
  FaNewspaper,
} from "react-icons/fa";
import {MdOutlineContactMail} from 'react-icons/md'
import {FiLogOut} from "react-icons/fi"
import {FcAbout} from "react-icons/fc"

export default function Admin({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggal = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/user",
      name: "User",
      icon: <FaUserAlt />,
    },

    {
        path:"/adminhome",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path:"/adminnews",
        name:"News",
        icon:<FaNewspaper/>
    },
    {
        path:"/adminabout",
        name:"About",
        icon:<FcAbout/>
    },
    {
        path:"/adminourprojact",
        name:"Our Projact",
        icon:<FaProjectDiagram/>
    },
    {
        path:"/admincontact",
        name:"Contact",
        icon:<MdOutlineContactMail/>
    },
    {
      path: "/login",
      name: "Login",
      icon: <FaUserCircle />,
    },
    {
      path: "/table",
      name: "Data",
      icon: <FaDatabase />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path:"/login",
      name:"LogOut",
      icon:<FiLogOut/>
    }
  ];
  return (
    <div className="container1">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
           ADMIN
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggal} />
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclass="active"
            >
              <div className="navIcon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="-link-text"
              >
                {item.name}
              </div>
            </NavLink>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
}
