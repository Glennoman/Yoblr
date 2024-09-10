import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yoblr-white-transparent.svg";
import UseHover from "../hooks/UseHover";
import FlyoutMenu from "./FlyoutMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { checkLogin } from "../features/authSlice";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get login state from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const [hoverRefProduct, isHoveredProduct] = UseHover();
  const [hoverRefAbout, isHoveredAbout] = UseHover();
  const [hoverRefRegister, isHoveredRegister] = UseHover();
  const [hoverRefLogin, isHoveredLogin] = UseHover();
  const [hoverRefLogout, isHoveredLogout] = UseHover();

  return (
    <nav className="flex justify-between p-3 px-6 bg-tertiary rounded-b-sm md:bg-tertiary">
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
        <div className="fixed inset-0 z-50 bg-tertiary/95 flex flex-col items-center justify-start -mb-1 pt-32 text-white">
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
        {/* Conditionally show Login if the user is not logged in */}
        {!isLoggedIn ? (
          <li>
            <Link
              to="/login"
              ref={hoverRefLogin}
              className={`active-hover ${
                isHoveredLogin ? "active-hover-hovered" : ""
              }`}
            >
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              ref={hoverRefLogout}
              className={`active-hover ${
                isHoveredLogout ? "active-hover-hovered" : ""
              }`}
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          </li>
        )}
        {/* Conditionally show Logout if the user is logged in */}
      </ul>
    </nav>
  );
};
export default Navbar;
