import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [30, 40],
  iconAnchor: [10, 44],
  popupAnchor: [12, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

const Routing = ({ source, destination }) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(parseFloat(source.lat), parseFloat(source.lng)),
        L.latLng(parseFloat(destination.lat), parseFloat(destination.lng)),
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "#18A0FB", weight: 7 }],
      },
      showAlternatives: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, source, destination]);

  return null;
};

export default Routing;
