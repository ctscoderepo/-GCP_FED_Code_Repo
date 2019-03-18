import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import FindStoreComponent from "../../components/StoreFinder";
import {
  setHeaderStatus,
  setFooterStatus,
  setNavBarStatus
} from "../../actions/Header";
import { connect } from "react-redux";
import { storeFinder,getStoresByLatLng } from "../../actions/StoreFinder";

const StoreFinder = ({
  setHeaderStatus,
  setFooterStatus,
  storeFinder,
  getStoresByLatLng,
  storeList
}) => {
  useEffect(() => {
    setHeaderStatus(true);
    setFooterStatus(false);
    setNavBarStatus(false);
    let defaultStoreData = {
        address: "40222",
        radius:"5"
    }
    storeFinder(defaultStoreData);
    return () => {
      setNavBarStatus(true);
    };
  }, []);
    
    
  return <FindStoreComponent findStores={storeFinder} storeList={storeList} getStoresByLatLng={getStoresByLatLng} />;
};

export default connect(
    ({ storeFinder }) => ({ storeList:storeFinder.storeList}),
  { setHeaderStatus, setFooterStatus, storeFinder,getStoresByLatLng }
  )(withRouter(StoreFinder));
  
