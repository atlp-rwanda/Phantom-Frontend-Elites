import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import citiesData from "../../data.json";
import AnimatedCarOnRoute from "./AnimatedCarOnRoute";

function DriverMap() {
  const [cities, setCities] = useState([]);
  const position = [39.898457, 116.391844];
  const [source, setSource] = useState({});
  const [destination, setDestination] = useState({});
  useEffect(() => {
    citiesData.map((eachCity) => setCities((cities) => [...cities, eachCity]));
  }, []);

  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AnimatedCarOnRoute />
      </MapContainer>
    </div>
  );
}

export default DriverMap;
