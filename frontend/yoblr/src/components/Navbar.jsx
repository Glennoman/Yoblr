import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/yoblr-white-transparent.svg";
import UseHover from "../hooks/UseHover";
import FlyoutMenu from "./FlyoutMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { checkLogin } from "../features/authSlice";
import { useCookies } from "react-cookie";
import axiosInstance from "../api/axiosInstance";

const Navbar = () => {
  const [user, setUser] = useState(null); // Store user-data
  const [cookies, setCookie] = useCookies(["token"]); // Token management
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get login state from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${cookies.token}`, // Sending token if needed
          },
        });
        setUser(res.data); // Set user data to state
      } catch (err) {
        console.error("Error fetching user data", err);
        setUser(null); // Resetting user data if error
      }
    };

    // Fetching data if token exist
    if (cookies.token) {
      fetchUserData();
      dispatch(checkLogin(cookies.token));
    }
  }, [cookies.token]);

  const handleLogout = () => {
    setCookie("token", "", { path: "/", expires: new Date(0) }); // Set expiration date in the past to remove the cookie
    dispatch(logout()); // Reset user state
    setUser(null);
    navigate("/register"); // Dispatch logout action from redux
  };

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
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
