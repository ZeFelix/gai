import React from "react";

import * as S from "./styles";

function FarmDescription() {
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
        <button>Buy now</button>
        <button>Bid</button>
      </S.ContenBuy>
    </S.Content>
  );
}

export default FarmDescription;
