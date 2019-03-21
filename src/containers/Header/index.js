import React from "react";
import HeaderComponent from "../../components/Header";
import { connect } from "react-redux";
import { searchResults } from "../../actions/Search";

const Header = ({ showNavbar, cartItems, searchResults, storeData }) => {
  return (
    <div>
      <HeaderComponent
        showNavbar={showNavbar}
        searchResults={searchResults}
        cartItems={cartItems}
        storeData={storeData}
      />
    </div>
  );
};

export default connect(
  ({ header }) => ({
    showNavbar: header.showNavbar,
    cartItems: header.cartItems,
    storeData: header.storeData
  }),
  { searchResults }
)(Header);
