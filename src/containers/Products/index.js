import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProducts, clearProducts } from "../../actions/Products";
import ProductsComponent from "../../components/Products";
import { shipToStore, setStoreDataToPDP } from "../../actions/ProductDetails";

const Products = ({
  match,
  getProducts,
  products,
  storeData,
  clearProducts,
  isLoading,
  shipToStore
}) => {
  useEffect(() => {
    getProducts(match.params);
    return () => {
      clearProducts();
    };
  }, [match.params.category, match.params.subCategory]);
  return (
    <div>
      <ProductsComponent
        products={products}
        isLoading={isLoading}
        shipToStore={shipToStore}
        storeData={storeData}
        setStoreDataToPDP={setStoreDataToPDP}
      />
    </div>
  );
};

export default connect(
  ({ products }) => ({
    products: products.products,
    isLoading: products.isLoading,
    storeData: products.storeData
  }),
  { getProducts, clearProducts, shipToStore, setStoreDataToPDP }
)(withRouter(Products));
