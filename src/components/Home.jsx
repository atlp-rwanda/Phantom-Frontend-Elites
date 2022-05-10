import React from "react";
import "leaflet/dist/leaflet.css";
import Navbar from "./NavbarComponent/Navbar";
import MapView from "./MapView";
import Footer from "./Footer";

/* =============================================
Landing Page Function Component
This is the home page component to be rendered
as the landing page view
============================================== */

const Home = () => {
  return (
    <>
      <Navbar />
      <MapView />
      <Footer />
    </>
  );
};

export default Home;
