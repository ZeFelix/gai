import React, { useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import { GeoJSON } from "react-leaflet";
import _ from "lodash";

// import { Container } from './styles';

function GeojsonLayer({ data, clickToFeature }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (_.isEmpty(mapRef) || _.isEmpty(data)) return;
    mapRef.current.leafletElement.clearLayers().addData(data);
  }, [mapRef, data]);

  function onEachFeature(_, layer) {
    layer.on({
      click: () => clickToFeature()
    });
  }

  return (
    <GeoJSON ref={mapRef} key={data.features} onEachFeature={onEachFeature} />
  );
}

GeojsonLayer.propTypes = {
  data: PropTypes.object.isRequired,
  clickToFeature: PropTypes.func.isRequired
};

export default GeojsonLayer;
