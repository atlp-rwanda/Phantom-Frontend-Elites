import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import citiesData from "../../data.json";
import Routing from "./Routing";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedCarOnRoute from "../DriverDashboard/AnimatedCarOnRoute";

function MapView() {
  const useStyles = makeStyles((theme) => ({
    inputRoot: {
      color: "black",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },

      backgroundColor: "white",
    },
  }));

  const classes = useStyles();
  const [cities, setCities] = useState([]);
  const position = [0, 0];
  const [source, setSource] = useState({});
  const [destination, setDestination] = useState({});
  useEffect(() => {
    citiesData.map((eachCity) => setCities((cities) => [...cities, eachCity]));
  }, []);

  return (
    <div className="leaflet-container">
      <div className="container">
        <Autocomplete
          id="combo-box"
          options={cities}
          onChange={(event, value) => {
            console.log(value);
            setSource(value);
          }}
          classes={classes}
          size="small"
          PaperComponent={({ children }) => (
            <Paper style={{ background: "white" }} elevation={10}>
              {children}
            </Paper>
          )}
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          inputRoot={{ borderColor: "black" }}
          style={{ width: 300, paddingBottom: "5%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              label="Source"
              variant="outlined"
              InputLabelProps={{
                style: { color: "black" },
              }}
            />
          )}
        />
        <Autocomplete
          id="combo-box"
          classes={classes}
          onChange={(event, value) => {
            console.log(value);
            setDestination(value);
          }}
          options={cities}
          size="small"
          PaperComponent={({ children }) => (
            <Paper style={{ background: "white" }} elevation={10}>
              {children}
            </Paper>
          )}
          getOptionLabel={(option) => `${option.city}, ${option.country}`}
          style={{ width: 300, paddingBottom: "5%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={({ target }) => setDestination(target.value)}
              color="secondary"
              label="Destination"
              variant="outlined"
              InputLabelProps={{
                style: { color: "black" },
              }}
            />
          )}
        />
      </div>

      <MapContainer center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AnimatedCarOnRoute />
        <LocationMarker />
        {Object.keys(source).length > 0 &&
          Object.keys(destination).length > 0 && (
            <Routing source={source} destination={destination} />
          )}
      </MapContainer>
    </div>
  );
}

export default MapView;
