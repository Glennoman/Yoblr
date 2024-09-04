import React from "react";
import SwipeCards from "../components/SwipeCards";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Yobler!</h1>
      <p>Start swiping to find your dream job.</p>
      <SwipeCards />
    </div>
  );
};

export default HomePage;
