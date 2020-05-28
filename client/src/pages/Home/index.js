import React, { useState } from "react";
import Maps from "../../components/Maps";
import Layout from "../_layout";
import { FarmInfo, FarmDetails } from "../../components/farm";

import * as S from "./styles";

const Home = () => {
  const [openFarmInfo, setOpenFarmInfo] = useState(true);
  const [openFarmDetails, setOpenFarmDetails] = useState(false);

  function handleClickMap() {
    setOpenFarmDetails(true);
    setOpenFarmInfo(false);
  }

  return (
    <Layout>
      <S.Container>
        <S.WrapperMap>
          <Maps handleClick={handleClickMap} />
        </S.WrapperMap>
        <S.WrapperInfo>
          {openFarmInfo && <FarmInfo />}
          {openFarmDetails && <FarmDetails />}
        </S.WrapperInfo>
      </S.Container>
    </Layout>
  );
};

export default Home;
