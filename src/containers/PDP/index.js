import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/PDP";
import PDPComponent from "../../components/PDP";

const PDP = ({ match, getProduct, product }) => {
  useEffect(() => {
    getProduct(match.params.item);
  }, [match.params.item]);
  return (
    <div>
      <PDPComponent product={product} />
    </div>
  );
};

export default connect(
  ({ product }) => ({ product: product.product }),
  actions
)(withRouter(PDP));
