import React from "react";
import FarmDescription from "../FarmDescription";

import * as S from "./styles";

export function FarmInfo() {
  return (
    <S.Wrapper>
      <S.Title>Farm</S.Title>
      <S.Search />
      <S.FarmContent>
        <FarmDescription />
        <S.Select>Select</S.Select>
      </S.FarmContent>
    </S.Wrapper>
  );
}
