import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import Maps from "../../components/Maps";
import Layout from "../_layout";
import { FarmInfo, FarmDetails } from "../../components/farm";
import GeojsonLayer from "../../components/GeojsonLayer";

import { initialFarm, farmChange } from "../../store/modules/farm/actions";
import { initialGeojson } from "../../store/modules/geojson/action";

import geoJsonData from "../../dataTemp/geo.json";
import farm from "../../dataTemp/fams.json";

import * as S from "./styles";

const Home = props => {
  const { history } = props;
  const [openFarmInfo, setOpenFarmInfo] = useState(true);
  const [openFarmDetails, setOpenFarmDetails] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialFarm(farm));
    dispatch(farmChange(farm[0]));
    dispatch(initialGeojson(geoJsonData));
  }, []);

  function handleClickFeature() {
    setOpenFarmDetails(true);
    setOpenFarmInfo(false);
  }

  function handleClickBuy() {
    history.push("/app/payment");
  }

  function handleClickBid() {
    history.push("/app/payment");
  }

  return (
    <Layout>
      <S.Container>
        <S.WrapperMap>
          <Maps
            clickToFeature={handleClickFeature}
            GeojsonLayer={GeojsonLayer}
          />
        </S.WrapperMap>
        <S.WrapperInfo>
          {openFarmInfo && (
            <FarmInfo clickBuy={handleClickBuy} clickBid={handleClickBid} />
          )}
          {openFarmDetails && (
            <FarmDetails clickBuy={handleClickBuy} clickBid={handleClickBid} />
          )}
        </S.WrapperInfo>
      </S.Container>
    </Layout>
  );
};

Home.propTypes = {
  history: PropTypes.object
};

export default Home;
