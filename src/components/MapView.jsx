import React, { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Search from "./Search";
import LocationMarker from "./LocationMarker";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -1.98507, lng: 30.031855 },
      zoom: 13,
    };
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <div
        className="superContainer"
        style={{
          position: "relative",
        }}
      >
        <div
          className="search"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 10000,
          }}
        >
          <Search />
        </div>
        <MapContainer center={currentLocation} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
    );
  }
}
export default MapView;
