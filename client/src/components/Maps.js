import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import { PropTypes } from "prop-types";

function Maps({ GeojsonLayer, data, clickToFeature }) {
  const [state, setState] = useState({});

  useEffect(() => {
    const coordinates = data.features[0].geometry.coordinates[0];
    setState({
      lat: coordinates[0][1],
      lng: coordinates[0][0],
      zoom: 13
    });
  }, [data]);

  return (
    <Map center={[state.lat, state.lng]} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <GeojsonLayer data={data} clickToFeature={clickToFeature} />
    </Map>
  );
}

Maps.propTypes = {
  GeojsonLayer: PropTypes.func.isRequired,
  clickToFeature: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default Maps;
