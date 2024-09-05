import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yoblr-white-transparent.svg";
import UseHover from "../hooks/UseHover";
import FlyoutMenu from "./FlyoutMenu";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  const [hoverRefProduct, isHoveredProduct] = UseHover();
  const [hoverRefAbout, isHoveredAbout] = UseHover();

  return (
    <nav className="flex justify-between p-5 px-6">
      <Link to="/">
        <img src={logo} className=" w-fit" />
      </Link>
      <div className="w-screen flex items-center pl-10">
        <ul className="flex gap-5">
          <li>
            <FlyoutMenu>
              <Link
                to="/"
                ref={hoverRefProduct}
                className={`active-hover ${
                  isHoveredProduct ? "active-hover-hovered" : ""
                }`}
              >
                Product
              </Link>
            </FlyoutMenu>
          </li>
          <li>
            <Link
              to="/about-us"
              ref={hoverRefAbout}
              className={`active-hover ${
                isHoveredAbout ? "active-hover-hovered" : ""
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
