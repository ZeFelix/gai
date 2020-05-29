import React from "react";
import { PropTypes } from "prop-types";
import { GeoJSON } from "react-leaflet";

// import { Container } from './styles';

function GeojsonLayer({ data, clickToFeature }) {
  function onEachFeature(feature, layer) {
    layer.on({
      click: () => clickToFeature(feature)
    });
  }

  return <GeoJSON data={data.features} onEachFeature={onEachFeature} />;
}

GeojsonLayer.propTypes = {
  data: PropTypes.object.isRequired,
  clickToFeature: PropTypes.func.isRequired
};

export default GeojsonLayer;
