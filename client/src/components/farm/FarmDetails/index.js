import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import "react-vis/dist/style.css";
import {
  XYPlot,
  LineMarkSeries,
  VerticalBarSeries,
  HorizontalGridLines,
  YAxis,
  XAxis
} from "react-vis";
import FarmDescription from "../FarmDescription";

import { getPrecipitations } from "../../../service/precipitation";
import { getNvdis } from "../../../service/ndvi";

import * as S from "./styles";

export function FarmDetails({ clickBuy, clickBid }) {
  const [dataNdvi, setDataNdvi] = useState([]);
  const [dataPrecitpitation, setDataPrecipitation] = useState([]);
  const { farmSelected } = useSelector(state => state.farm);

  function formatNdvi(farmNdvi, farmSelected) {
    return Object.keys(farmNdvi).map(month => {
      return {
        x: month,
        y: farmNdvi[month][`ndvi_${farmSelected.farm_id}`]
      };
    });
  }

  function mountPrecipitation(farmsPrecipitation, farmSelected) {
    return Object.keys(farmsPrecipitation).map(month => {
      return {
        x: month,
        y: farmsPrecipitation[month][`precipitation_${farmSelected.farm_id}`]
      };
    });
  }

  useEffect(() => {
    getPrecipitations()
      .then(response => {
        setDataPrecipitation(mountPrecipitation(response, farmSelected));
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
  }, [setDataPrecipitation, farmSelected]);

  return (
    <S.Wrapper>
      <S.GraphContent>
        <XYPlot height={300} width={500} xType="ordinal">
          <XAxis tickLabelAngle={-45} />
          <HorizontalGridLines />
          <YAxis orientation="right" title="Precipitation" />
          <VerticalBarSeries
            data={dataPrecitpitation}
            color="blue"
            yDomain={[0, 600]}
          />
          <YAxis orientation="left" title="NDVI" />
          <LineMarkSeries data={dataNdvi} color="black" yDomain={[0, 6]} />
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
