import React, { useState } from "react";
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "../App.css";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <div className="container">
      <div
        className={`sidebar ${isOpen ? "toggle_width_300" : "toggle_width_50"}`}
      >
        <div className="top_section">
          <h1 className={`logo ${isOpen ? "toggle_block" : "toggle_none"}`}>
            Logo
          </h1>
          <div className={`bars ${isOpen ? "toggle_ml_50" : "toggle_ml_0"}`}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item) => (
          <NavLink to={item.path} key={item.name} className="link">
            <div className="icon">{item.icon}</div>
            <div
              className={`link_text ${isOpen ? "toggle_block" : "toggle_none"}`}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
