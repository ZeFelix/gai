import React from "react";
import FarmDescription from "../FarmDescription";

import * as S from "./styles";

export function FarmDetails() {
  return (
    <S.Wrapper>
      <S.GraphContent>grafico</S.GraphContent>
      <S.Details>
        <FarmDescription />
      </S.Details>
    </S.Wrapper>
  );
}
