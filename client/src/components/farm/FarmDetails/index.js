import React from "react";
import { PropTypes } from "prop-types";
import FarmDescription from "../FarmDescription";

import * as S from "./styles";

export function FarmDetails({ clickBuy, clickBid }) {
  return (
    <S.Wrapper>
      <S.GraphContent>grafico</S.GraphContent>
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
