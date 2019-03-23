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
      marginLeft: "10px"
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
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: "12px",
    [theme.breakpoints.up("sm")]: {
        fontSize: "10px",
        whiteSpace:"nowrap"
    }
  },
  storeName: {
    color: "lawngreen",
    fontWeight: "bold",
    fontSize: "10px",
    whiteSpace: "nowrap",
      
  },
  shopContent: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    }
  },
  storeLoc: {
    marginTop: "5px"
  },
  storeLoc1: {
    marginTop: "2px"
  }
});

const Location = props => {
  const { classes, history, storeData } = props;

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
        <div className={storeData ? classes.storeLoc : classes.storeLoc1}>
          {storeData ? (
            <div style={{ height: "10px", fontSize: "11px" }}>
              You're Shopping
            </div>
          ) : (
            ""
          )}
          <Link
            className={storeData ? classes.storeName : classes.shopLocation}
          >
            {storeData ? storeData : "Find a store"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(Location));
