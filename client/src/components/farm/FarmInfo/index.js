import React from "react";
import { PropTypes } from "prop-types";
import FarmDescription from "../FarmDescription";

import * as S from "./styles";

export function FarmInfo({ clickBuy, clickBid }) {
  return (
    <S.Wrapper>
      <S.Title>Farm</S.Title>
      <S.Search />
      <S.FarmContent>
        <FarmDescription
          clickBuy={clickBuy}
          clickBid={clickBid}
          showSelected={true}
        />
      </S.FarmContent>
    </S.Wrapper>
  );
}

FarmInfo.propTypes = {
  clickBuy: PropTypes.func.isRequired,
  clickBid: PropTypes.func.isRequired
};
