import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../assets/data.json";
import Search from "./Search";
import LocationMarker from "./LocationMarker";
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
    <div className="mt-16">
      <Navbar />
      <MapView />
      <Footer />
    </div>
  );
};

export default Home;