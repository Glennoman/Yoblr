import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yoblr-white-transparent.svg";
import UseHover from "../hooks/UseHover";
import FlyoutMenu from "./FlyoutMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const [hoverRefProduct, isHoveredProduct] = UseHover();
  const [hoverRefAbout, isHoveredAbout] = UseHover();
  const [hoverRefRegister, isHoveredRegister] = UseHover();

  return (
    <nav className="flex justify-between p-3 px-6 bg-tertiary rounded-b-sm md:bg-black/80">
      <Link to="/">
        <img src={logo} className="w-fit" alt="Yoblr Logo" />
      </Link>

      {/* Desktop Navbar (visible on larger screens) */}
      <div className="md:hidden xs:hidden lg:flex w-screen items-center justify-between pl-10">
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
          <li>
            <Link
              to="/register"
              ref={hoverRefRegister}
              className={`active-hover ${
                isHoveredRegister ? "active-hover-hovered" : ""
              }`}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar (visible on smaller screens) */}
      <div className="flex w-screen justify-end items-start pr-5 lg:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Open Menu"
          className="flex items-center"
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu (full screen) */}
      {menuOpened && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center text-white">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-5 text-xl">
            <li>
              <Link to="/register" onClick={toggleMenu}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <FlyoutMenu>
                <Link>Product</Link>
              </FlyoutMenu>
            </li>
          </ul>
        </div>
      )}
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
