import React, { useEffect } from "react";
import { connect } from "react-redux";
import ConfirmationComponent from "../../components/confirmation";
import { setHeaderStatus, setFooterStatus } from "../../actions/Header";
import { clearCartItemsOnHeader } from "../../actions/Header";

const Confirmation = ({
  setHeaderStatus,
  setFooterStatus,
  clearCartItemsOnHeader,
  checkoutData,
  isLoading,
  storeProductInfo,
  shipToStoreData
}) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return (
    <ConfirmationComponent
      clearCartItemsOnHeader={clearCartItemsOnHeader}
      checkoutData={checkoutData}
      isLoading={isLoading}
      storeProductInfo={storeProductInfo}
      shipToStoreData={shipToStoreData}
    />
  );
};

export default connect(
  ({ confirmation }) => ({
    checkoutData: confirmation.checkoutData,
    isLoading: confirmation.isLoading,
    storeProductInfo: confirmation.storeProductInfo,
    shipToStoreData: confirmation.shipToStoreData
  }),
  { setHeaderStatus, setFooterStatus, clearCartItemsOnHeader }
)(Confirmation);
