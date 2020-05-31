import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import Maps from "../../components/Maps";
import Layout from "../_layout";
import { FarmInfo, FarmDetails } from "../../components/farm";
import GeojsonLayer from "../../components/GeojsonLayer";

import { getFarms } from "../../service/farms";

import { initialFarm, farmChange } from "../../store/modules/farm/actions";

import * as S from "./styles";

const Home = props => {
  const { history } = props;
  const [openFarmInfo, setOpenFarmInfo] = useState(true);
  const [openFarmDetails, setOpenFarmDetails] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getFarms()
      .then(response => {
        dispatch(initialFarm(response));
        dispatch(farmChange(response[0]));
      })
      .catch(err => {
        console.error(err);
      });
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
