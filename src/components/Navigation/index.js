import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const styles = theme => ({
  svgArrowDown: {
    fill: "white"
  }
});

function NavigationMenu(props) {
  const { classes } = props;
  const NavBar = [
    { category: "Electronics", url: "/shopping/Electronics" },
    { category: "Toys", url: "/shopping/Toys" },
    { category: "Apparel", url: "/shopping/Apparel" },
    { category: "Home Decor", url: "/shopping/Home-Decor" },
    { category: "Gift Cards", url: "/shopping/Gift-Cards" }
  ].map(item => (
    <li key={item.category}>
      <Typography style={{ width: "auto", float: "left", fontSize: "13px" }}>
        <Link to={item.url} className="nav-item">
          {item.category}
        </Link>
      </Typography>
      <Typography>
        <Link to={item.url}>
          <svg
            className={classes.svgArrowDown}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 20 20"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          </svg>
        </Link>
      </Typography>
    </li>
  ));
  return (
    <div className="navigationMenu">
      <div className="customContainer">
        <ul className="NavigationMenu-nav-bar">{NavBar}</ul>
      </div>
    </div>
  );
}

export default withStyles(styles)(NavigationMenu);
