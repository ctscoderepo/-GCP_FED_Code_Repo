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
  storeProductInfo
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
    />
  );
};

export default connect(
  ({ confirmation }) => ({
    checkoutData: confirmation.checkoutData,
    isLoading: confirmation.isLoading,
    storeProductInfo: confirmation.storeProductInfo
  }),
  { setHeaderStatus, setFooterStatus, clearCartItemsOnHeader }
)(Confirmation);
