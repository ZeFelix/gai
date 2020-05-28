import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { PropTypes } from "prop-types";

function Maps({ handleClick }) {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    });
  }, []);

  return (
    <Map
      center={[state.lat, state.lng]}
      zoom={state.zoom}
      onclick={handleClick}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[state.lat, state.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

Maps.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Maps;
