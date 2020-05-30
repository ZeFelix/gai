import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import "react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  HorizontalGridLines,
  YAxis,
  XAxis
} from "react-vis";
import { parseISO, format } from "date-fns";
import FarmDescription from "../FarmDescription";

import farmNdvi from "../../../dataTemp/farms_ndvi.json";
import farmsPrecipitation from "../../../dataTemp/farms_precipitation.json";

import * as S from "./styles";

export function FarmDetails({ clickBuy, clickBid }) {
  const [dataNdvi, setDataNdvi] = useState([]);
  const [dataPrecitpitation, setDataPrecipitation] = useState([]);
  const { farmSelected } = useSelector(state => state.farm);

  function formatNdvi(farmNdvi, farmSelected) {
    return farmNdvi.map(f => {
      return {
        x: format(parseISO(f.date), "MMM"),
        y: parseFloat(f[`ndvi_${farmSelected.farm_id}`].replace(",", "."))
      };
    });
  }

  function formatPrecipitation(farmsPrecipitation, farmSelected) {
    return farmsPrecipitation.map(f => {
      return {
        x: format(parseISO(f.date), "MMM"),
        y: parseInt(f[`precipitation_${farmSelected.farm_id}`])
      };
    });
  }

  useEffect(() => {
    setDataNdvi(formatNdvi(farmNdvi, farmSelected));
    setDataPrecipitation(formatPrecipitation(farmsPrecipitation, farmSelected));
  }, [
    setDataNdvi,
    setDataPrecipitation,
    farmNdvi,
    farmsPrecipitation,
    farmSelected
  ]);

  return (
    <S.Wrapper>
      <S.GraphContent>
        <XYPlot height={300} width={600} xType="ordinal">
          <XAxis />
          <HorizontalGridLines />
          <YAxis orientation="right" title="Precipitation" />
          <VerticalBarSeries
            data={dataPrecitpitation}
            color="blue"
            yDomain={[1, 50]}
          />
          <YAxis orientation="left" title="NDVI" />
          <LineSeries data={dataNdvi} color="black" yDomain={[0, 1]} />
        </XYPlot>
      </S.GraphContent>
      <S.Details>
        <FarmDescription clickBuy={clickBuy} clickBid={clickBid} />
      </S.Details>
    </S.Wrapper>
  );
}

FarmDetails.propTypes = {
  clickBuy: PropTypes.func.isRequired,
  clickBid: PropTypes.func.isRequired
};
