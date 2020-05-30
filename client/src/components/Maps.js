import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Map, TileLayer } from "react-leaflet";
import { PropTypes } from "prop-types";
import _ from "lodash";

function Maps({ GeojsonLayer, clickToFeature }) {
  const { data } = useSelector(state => state.geojson);
  const { farmSelected } = useSelector(state => state.farm);
  const [state, setState] = useState({});
  const [geojsonSelected, setGeojsonSelected] = useState({});

  useEffect(() => {
    if (_.isEmpty(farmSelected) || _.isEmpty(data)) return;

    setGeojsonSelected(data[farmSelected.farm_id]);

    setState({
      lat: farmSelected.latitude,
      lng: farmSelected.longitude,
      zoom: 14
    });
  }, [farmSelected, data]);

  return (
    <>
      <Map center={[state.lat, state.lng]} zoom={state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <GeojsonLayer data={geojsonSelected} clickToFeature={clickToFeature} />
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
