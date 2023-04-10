import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Selling from "./pages/Selling/Selling";
import Buying from "./pages/Buying/Buying";
import Navbar from "./Components/Navbar";
import Footer from "./pages/Footer/Footer";
import Insurance from "./pages/Insurance/Insurance";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
import Bank from "./pages/Banks/Bank";
import Finance from "./pages/Finance/Finance";
import Insurancecal from "./pages/Insurancecal/Insurancecal";
import SeliingResult from "./pages/SellingResult/SeliingResult";
import AfterLogin from "./pages/AfterLogin/AfterLogin";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/Selling"
          element={
            <>
              <Navbar />
              <Selling />
              <Footer />
            </>
          }
        />
        <Route
          path="/Buying"
          element={
            <>
              <Navbar />
              <Buying />
              <Footer />
            </>
          }
        />
        <Route
          path="/Signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="/Insurance"
          element={
            <>
              <Navbar />
              <Insurance />
              <Footer />
            </>
          }
        />
        <Route
          path="/Aboutus"
          element={
            <>
              <Navbar />
              <Aboutus />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contactus"
          element={
            <>
              <Navbar />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route
          path="/Bank"
          element={
            <>
              <Navbar />
              <Bank />
              <Footer />
            </>
          }
        />
        <Route
          path="/Finance"
          element={
            <>
              <Navbar />
              <Finance />
              <Footer />
            </>
          }
        />
        <Route
          path="/Insurancecal"
          element={
            <>
              <Navbar />
              <Insurancecal />
              <Footer />
            </>
          }
        />
        <Route
          path="/sellingresult"
          element={
            <>
              <Navbar />
              <SeliingResult />
              <Footer />
            </>
          }
        />
        <Route
          path="/AfterLogin"
          element={
            <>
              <Navbar />
              <AfterLogin />
              <Footer />
            </>
          }
        />
        {/* <Route path=></> */}
        {/* <Route path='/Home' element={<><Footer/><Home /></>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
