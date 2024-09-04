import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
