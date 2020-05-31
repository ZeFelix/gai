import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Map, TileLayer } from "react-leaflet";
import { PropTypes } from "prop-types";
import _ from "lodash";

function Maps({ GeojsonLayer, clickToFeature }) {
  const { data: geojson } = useSelector(state => state.geojson);
  const { farmSelected } = useSelector(state => state.farm);
  const [state, setState] = useState({});

  useEffect(() => {
    if (_.isEmpty(farmSelected)) return;

    setState({
      lat: farmSelected.latitude,
      lng: farmSelected.longitude,
      zoom: 14
    });
  }, [farmSelected]);

  return (
    <>
      <Map center={[state.lat, state.lng]} zoom={state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <GeojsonLayer data={geojson} clickToFeature={clickToFeature} />
      </Map>
      )
    </>
  );
}

Maps.propTypes = {
  GeojsonLayer: PropTypes.func.isRequired,
  clickToFeature: PropTypes.func.isRequired
};

export default Maps;
