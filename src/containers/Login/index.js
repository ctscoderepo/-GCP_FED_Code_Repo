import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginComponent from "../../components/Login";
import * as actions from "../../actions/Header";

const Login = ({ setHeaderStatus, setFooterStatus }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return (
    <div>
      <LoginComponent />
    </div>
  );
};

export default connect(
  null,
  actions
)(Login);
