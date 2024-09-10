import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import SwipeCards from "./components/SwipeCards";
import ProductPage from "./pages/ProductPage";
import AboutUsPage from "./pages/AboutUsPage";
import ArrowDown from "./components/ArrowDown";

function App() {
  return (
    <Router>
      <div className="min-h-full bg-gradient-to-b from-pink-500 to-orange-500/80">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
          <Route path="/get-started" element={<SwipeCards />} />
        </Routes>
        <ProductPage />
      </div>
    </Router>
  );
}

export default App;
