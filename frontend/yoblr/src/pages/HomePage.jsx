import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <h1>Welcome to Yoblr!</h1>
      <p>Start swiping to find your dream job.</p>
      <Link to="/get-started">
        <button className="btn-outline rounded-2xl mt-2">
          Click here to start
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
