import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProduct,
  clearProduct,
  productDetailsToConfirm
} from "../../actions/ProductDetails";
import ProductDetailsPage from "../../components/ProductDetails";

const ProductDetails = ({
  match,
  getProduct,
  product,
  storeName,
  clearProduct,
  shipToStoreData,
  productDetailsToConfirm
}) => {
  useEffect(() => {
    getProduct(match.params.item);
    return () => {
      clearProduct();
    };
  }, [match.params.item]);
  return (
    <div>
      <ProductDetailsPage
        product={product}
        shipToStoreData={shipToStoreData}
        productDetailsToConfirm={productDetailsToConfirm}
        storeName={storeName}
      />
    </div>
  );
};

export default connect(
  ({ product }) => ({
    product: product.product,
    shipToStoreData: product.shipToStoreData,
    storeName:product.storeName
  }),
  { getProduct, clearProduct, productDetailsToConfirm }
)(withRouter(ProductDetails));
