import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  locationContainer: {
    margin: "0 40px 0 20px",
    display: "flex",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0px"
    }
  },
  location: {
    flexDirection: "row",
    fill: "white",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px"
    }
  },
  shopText: {
    color: "#0084CD",
    fontSize: "12px"
  },
  shopLocation: {
    color: "white",
    fontWeight: "bold",
    paddingTop: "20px",
    whiteSpace: "nowrap",
    [theme.breakpoints.up("sm")]: {}
  },
  shopContent: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

const Location = props => {
  const { classes, history } = props;

  const clickhere = () => {
    history.push("/FindStore");
  };

  return (
    <div className={classes.locationContainer} onClick={() => clickhere()}>
      <i className={`material-icons ${classes.location}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </i>
      <div className={classes.shopContent}>
        <div style={{ marginTop: "4px" }}>
          <Link className={classes.shopLocation}>Find a store</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(Location));
