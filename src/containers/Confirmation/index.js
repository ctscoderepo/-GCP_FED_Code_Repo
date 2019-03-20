import React, { useEffect } from "react";
import { connect } from "react-redux";
import ConfirmationComponent from "../../components/confirmation";
import {setHeaderStatus, setFooterStatus} from "../../actions/Header";
import { clearCartItemsOnHeader } from "../../actions/Header";

const Confirmation = ({ setHeaderStatus, setFooterStatus,clearCartItemsOnHeader,checkoutData}) => {
    
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <ConfirmationComponent clearCartItemsOnHeader={clearCartItemsOnHeader} checkoutData={checkoutData} />;
};

export default connect(({ confirmation }) => ({ checkoutData: confirmation.checkoutData }), {setHeaderStatus, setFooterStatus,clearCartItemsOnHeader})(Confirmation);
