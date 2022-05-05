import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// import pin from '../path/pin.png'; (if local import)
const pin = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";

const icon = L.icon({
  iconUrl: pin,
  iconSize: [20, 41],
  iconAnchor: [0, 44],
  popupAnchor: [12, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = 1000;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        You are here. <br />
        Location: <br />
        <b>Southwest lng</b>: {bbox[0]} <br />
        <b>Southwest lat</b>: {bbox[1]} <br />
        <b>Northeast lng</b>: {bbox[2]} <br />
        <b>Northeast lat</b>: {bbox[3]}
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
