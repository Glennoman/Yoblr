import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/yoblr-white-transparent.svg";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="flex justify-between p-3">
      <div className="">
        <Link to="/">
          <img src={logo} className=" w-fit" />
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
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
