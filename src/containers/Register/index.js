import React, { useEffect } from "react";
import { connect } from "react-redux";
import RegisterComponent from "../../components/Register";
import * as actions from "../../actions/Header";

const Login = ({ setHeaderStatus, setFooterStatus }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return (
    <div>
      <RegisterComponent />
    </div>
  );
};

export default connect(
  null,
  actions
)(Login);
