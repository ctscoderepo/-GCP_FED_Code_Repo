import React from "react";
import HeaderComponent from "../../components/Header";
import { connect } from "react-redux";

const Header = ({ showNavbar }) => {
  return (
    <div>
      <HeaderComponent showNavbar={showNavbar} />
    </div>
  );
};

export default connect(({ header }) => ({ showNavbar: header.showNavbar }))(
  Header
);
