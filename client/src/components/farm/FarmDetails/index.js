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

import { getPrecipitations } from "../../../service/precipitation";
import { getNvdis } from "../../../service/ndvi";

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
    getPrecipitations()
      .then(response => {
        setDataPrecipitation(formatPrecipitation(response, farmSelected));
      })
      .catch(err => {
        console.log(err);
      });

    getNvdis()
      .then(response => {
        setDataNdvi(formatNdvi(response, farmSelected));
      })
      .catch(err => {
        console.log(err);
      });
  }, [setDataNdvi, setDataPrecipitation, farmSelected]);

  return (
    <S.Wrapper>
      <S.GraphContent>
        <XYPlot height={300} width={400} xType="ordinal">
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
        <FarmDescription
          clickBuy={clickBuy}
          clickBid={clickBid}
          showSelected={false}
        />
      </S.Details>
    </S.Wrapper>
  );
}

FarmDetails.propTypes = {
  clickBuy: PropTypes.func.isRequired,
  clickBid: PropTypes.func.isRequired
};
