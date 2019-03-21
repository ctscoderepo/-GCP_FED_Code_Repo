import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import FindStoreComponent from "../../components/StoreFinder";
import {
  setHeaderStatus,
  setFooterStatus,
  setNavBarStatus,
  setStoreData
} from "../../actions/Header";
import { connect } from "react-redux";
import { storeFinder, getStoresByLatLng } from "../../actions/StoreFinder";

const StoreFinder = ({
  setHeaderStatus,
  setFooterStatus,
  storeFinder,
  getStoresByLatLng,
  storeList,
  setStoreData
}) => {
  useEffect(() => {
    setHeaderStatus(true);
    setFooterStatus(false);
    setNavBarStatus(false);
    let defaultStoreData = {
      address: "40222",
      radius: "5"
    };
    storeFinder(defaultStoreData);
    return () => {
      setNavBarStatus(true);
    };
  }, []);

  return (
    <FindStoreComponent
      findStores={storeFinder}
      storeList={storeList}
      getStoresByLatLng={getStoresByLatLng}
      setStoreData={setStoreData}
    />
  );
};

export default connect(
  ({ storeFinder }) => ({ storeList: storeFinder.storeList }),
  {
    setHeaderStatus,
    setFooterStatus,
    storeFinder,
    getStoresByLatLng,
    setStoreData
  }
)(withRouter(StoreFinder));
