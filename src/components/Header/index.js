import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Location from "../Location";
import NavigationMenu from "../Navigation";
import "./index.css";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    display: "none",
    color: "#000",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  title: {
    display: "block",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing.unit * 1.5
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: "5px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
      marginRight: "15px"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    right: 0,
    backgroundColor: "#0084CD",
    borderRadius: "0 3px 3px 0px",
    [theme.breakpoints.down("sm")]: {
      color: "#0084CD",
      backgroundColor: "transparent"
    }
  },
  inputRoot: {
    color: "#000",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingLeft: theme.spacing.unit * 4,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.1)",
    [theme.breakpoints.up("sm")]: {
      width: 500
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    borderRadius: "3px"
  },
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none"
  },
  signin: {
    fill: "#000",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  cart: {
    fill: "#000",
    margin: "0 15px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px"
    }
  },
  logo: {
    width: "100px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  toolBar: {
    minHeight: "70px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: "1px solid lightgrey",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      minHeight: "65px"
    }
  },
  NavigationMenu: {
    padding: "0",
    backgroundColor: "#fff",
    minHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

function SearchAppBar(props) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { classes } = props;
  const sideList = (
    <div className={classes.list}>
      <List>
        {[
          { category: "Electronics", url: "/shopping/Electronics" },
          { category: "Toys", url: "/shopping/Toys" },
          { category: "Lowels", url: "/shopping/Lowels" }
        ].map((text, index) => (
          <ListItem button key={text.category}>
            <Link to={text.url} className="drawerStyles">
              <ListItemText primary={text.category} />
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </ListItemIcon>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <>
      <div className="componentContainer">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  className={classes.logo}
                />
              </Link>
            </Typography>

            <Location />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search....."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div>
              <i className={`material-icons ${classes.signin}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                >
                  <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z" />
                </svg>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                  </svg>
                </span>
              </i>
            </div>
            <div>
              <i className={`material-icons ${classes.cart}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </i>
            </div>

            <Drawer open={open} onClose={toggleDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                {sideList}
              </div>
            </Drawer>
          </Toolbar>
          <Toolbar className={classes.NavigationMenu}>
            <NavigationMenu />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
