import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center pt-10 xs:h-screen xs:pb-20 xs:justify-end">
      <h1 className="text-8xl text-tertiary font-semibold mb-5 xs:text-6xl xs:text-center">
        Welcome to Yoblr!
      </h1>
      <p className="text-xl text-tertiary">
        Start swiping to find your dream job.
      </p>
      <Link to="/get-started">
        <button className="btn-outline rounded-2xl my-5 hover:bg-tertiary ease-linear">
          Click here to start
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
