import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import car from "../../Assets/images/car.png";
import AnimatedMarker from "./AnimatedMarker";

const AnimatedCarOnRoute = () => {
  const map = useMap();

  if (!map) return;
  let carIcon = L.icon({
    iconSize: [37, 26],
    iconAnchor: [19, 13],
    iconUrl: car,
  });

  let latlngs = [
    [39.898457, 116.391844],
    [39.898595, 116.377947],
    [39.898341, 116.368001],
    [39.898063, 116.357144],
    [39.899095, 116.351934],
    [39.905871, 116.35067],
    [39.922329, 116.3498],
    [39.931017, 116.349671],
    [39.939104, 116.349225],
    [39.942233, 116.34991],
    [39.947263, 116.366892],
    [39.947568, 116.387537],
    [39.947764, 116.401988],
    [39.947929, 116.410824],
    [39.947558, 116.42674],
    [39.9397, 116.427338],
    [39.932404, 116.427919],
    [39.923109, 116.428377],
    [39.907094, 116.429583],
    [39.906858, 116.41404],
    [39.906622, 116.405321],
    [39.906324, 116.394954],
    [39.906308, 116.391264],
    [39.916611, 116.390748],
  ];
  let speedList = [
    1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 3, 2, 2, 1, 1, 1,
  ];

  let routeLine = L.polyline(latlngs, {
    weight: 8,
  }).addTo(map);
  let realRouteLine = L.polyline([], {
    weight: 8,
    color: "#FF9900",
  }).addTo(map);

  let animatedMarker = AnimatedMarker(routeLine.getLatLngs(), {
    speedList: speedList,
    interval: 200,
    icon: carIcon,
    playCall: updateRealLine,
  }).addTo(map);

  let newLatlngs = [routeLine.getLatLngs()[0]];

  function updateRealLine(latlng) {
    newLatlngs.push(latlng);
    realRouteLine.setLatLngs(newLatlngs);
  }

  let speetX = 1;
  function speetUp() {
    speetX = speetX * 2;
    animatedMarker.setSpeetX(speetX);
  }

  function speetDown() {
    speetX = speetX / 2;
    animatedMarker.setSpeetX(speetX);
  }

  function startClick() {
    animatedMarker.start();
  }
  startClick();

  function pauseClick() {
    animatedMarker.pause();
  }

  function stopClick() {
    newLatlngs = [];
    animatedMarker.stop();
  }
  return null;
};

export default AnimatedCarOnRoute;
