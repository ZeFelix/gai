import React from "react";
import { PropTypes } from "prop-types";

import * as S from "./styles";

function FarmDescription({ clickBuy, clickBid }) {
  return (
    <S.Content>
      <S.FarmItem>Farm: name</S.FarmItem>
      <S.FarmItem>Culture: name</S.FarmItem>
      <S.FarmItem>Variety: name</S.FarmItem>
      <S.FarmItem>Area: name</S.FarmItem>
      <S.FarmItem>Yield Estimation: name</S.FarmItem>
      <S.FarmItem>Total: name</S.FarmItem>
      <S.FarmItem>Price: _____</S.FarmItem>
      <S.ContenBuy>
        <button onClick={clickBuy}>Buy now</button>
        <button onClick={clickBid}>Bid</button>
      </S.ContenBuy>
    </S.Content>
  );
}

FarmDescription.propTypes = {
  clickBuy: PropTypes.func.isRequired,
  clickBid: PropTypes.func.isRequired
};

export default FarmDescription;
