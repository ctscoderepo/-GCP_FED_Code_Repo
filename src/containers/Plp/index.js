import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/Plp";
import PLPComponent from "../../components/Plp";

const PLP = ({ match, getProduct, product }) => {
  useEffect(() => {
    getProduct(match.params.item);
  }, [match.params.item]);
  return (
    <div>
      <PLPComponent product={product} />
    </div>
  );
};

export default connect(
  ({ product }) => ({ product: product.product }),
  actions
)(withRouter(PLP));
