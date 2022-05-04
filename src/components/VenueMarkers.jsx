import React, { Fragment } from "react";
import { Marker } from "react-leaflet";

import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry}>
      <MarkerPopup data={venue} />
    </Marker>
  ));

  return <div test-data="markers">{markers}</div>;
};

export default VenueMarkers;
