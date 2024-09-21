import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import SwipeCards from "./components/SwipeCards";
import ProductPage from "./components/ProductPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";
import ChooseRole from "./pages/ChooseRole";
import SwipeSettings from "./pages/SwipeSettings";

function App() {
  return (
    <>
      <div className="bg-tertiary">
        {/* {!hideNavbarFooter && <Navbar />} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/submit-form" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/choose-role" element={<ChooseRole />} />
          <Route path="/swipe-settings" element={<SwipeSettings />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
          <Route path="/get-started" element={<SwipeCards />} />
        </Routes>
        <Footer />
        {/* {!hideNavbarFooter && <Footer />} */}
      </div>
    </>
  );
}

export default function MainApp() {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
}
