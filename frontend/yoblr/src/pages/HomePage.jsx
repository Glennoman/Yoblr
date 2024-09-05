import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center xs:h-screen pt-10">
      <h1 className="text-8xl mb-5 xs:text-6xl xs:text-center">
        Welcome to Yoblr!
      </h1>
      <p className="text-xl">Start swiping to find your dream job.</p>
      <Link to="/get-started">
        <button className="btn-outline rounded-2xl my-5 hover:bg-black/80 ease-linear">
          Click here to start
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
