import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/Products";
import ProductsComponent from "../../components/Products";

const Products = ({ match, getProducts, products }) => {
  useEffect(() => {
    getProducts(match.params);
  }, [match.params.category, match.params.subCategory]);
  return (
    <div>
      <ProductsComponent products={products} />
    </div>
  );
};

export default connect(
  ({ products }) => ({ products: products.products }),
  actions
)(withRouter(Products));
