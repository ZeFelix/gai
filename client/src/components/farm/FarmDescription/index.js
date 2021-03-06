/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { PropTypes } from "prop-types";
import _ from "lodash";

import { getGeojson } from "../../../service/geojson";

import { farmChange } from "../../../store/modules/farm/actions";
import { initialGeojson } from "../../../store/modules/geojson/action";

import * as S from "./styles";

function FarmDescription({ clickBuy, clickBid, showSelected }) {
  const [options, setOption] = useState();
  const dispatch = useDispatch();
  const { data: farms, farmSelected } = useSelector(state => state.farm);

  useEffect(() => {
    setOption(farms.map(f => ({ value: f.farm_id, label: f.name })));
  }, [setOption, farms]);

  function handleChange(params) {
    const { value } = params;
    getGeojson(value)
      .then(response => {
        dispatch(initialGeojson(response));
      })
      .catch(err => {
        console.log(err);
      });
    dispatch(farmChange(value));
  }

  return (
    <S.Content>
      <S.FarmItem>
        Farm:
        {showSelected ? (
          <Select
            defaultValue={{ "value": farmSelected.farm_id, "label": farmSelected.name }}
            options={options}
            onChange={handleChange}
          />
        ) : (
            <span>{farmSelected.name}</span>
          )}
      </S.FarmItem>
      <S.FarmItem>Culture: {farmSelected.culture}</S.FarmItem>
      <S.FarmItem>Variety: {farmSelected.variety}</S.FarmItem>
      <S.FarmItem>Area: {farmSelected.total_area}</S.FarmItem>
      <S.FarmItem>Yield Estimation: {farmSelected.yield_estimation}</S.FarmItem>
      <S.FarmItem>
        Total: {farmSelected.total_area * farmSelected.yield_estimation}
      </S.FarmItem>
      <S.FarmItem>Price: {farmSelected.price}</S.FarmItem>
      <S.ContenBuy>
        {!_.isEmpty(farmSelected) &&
          <>
            <button onClick={clickBuy}>Buy now</button>
            <button onClick={clickBid}>Bid</button>
          </>}
      </S.ContenBuy>
    </S.Content>
  );
}

FarmDescription.propTypes = {
  clickBuy: PropTypes.func.isRequired,
  clickBid: PropTypes.func.isRequired,
  showSelected: PropTypes.bool.isRequired
};

export default FarmDescription;
