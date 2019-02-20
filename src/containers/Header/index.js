import React from "react";
import HeaderComponent from "../../components/Header";
import { connect } from "react-redux";
import { searchResults } from "../../actions/Search";

const Header = ({ showNavbar, searchResults }) => {
  return (
    <div>
      <HeaderComponent showNavbar={showNavbar} searchResults={searchResults} />
    </div>
  );
};

export default connect(
  ({ header }) => ({ showNavbar: header.showNavbar }),
  { searchResults }
)(Header);
