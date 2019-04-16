import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const styles = theme => ({
  svgArrowDown: {
    fill: "white"
  },
    navCategory:{
       display:"flex",
        padding:"0px 10px 0px 10px", 
        fontSize:"12px", 
        width:"auto", 
        whiteSpace:"nowrap",
        paddingTop:"18px",
        marginRight:"20px",
        [theme.breakpoints.up("lg")]: {
         fontSize:"14px"    
    },
        [theme.breakpoints.down("sm")]: {
         fontSize:"11px",
        fontWeight:"bold",
        marginRight:"0px",
    }
    },
    navList:{
    marginLeft:"20px"
    },
    navDownArrow:{
        marginTop:"-3px",
        [theme.breakpoints.up("sm")]: {
        marginTop:"-5px",
    }
    }
});

function NavigationMenu(props) {
  const { classes } = props;
  const NavBar = [
    { category: "Electronics", url: "/shopping/Electronics" },
    { category: "Toys for Kids", url: "/shopping/Toys" },
    { category: "Apparel", url: "/shopping/Apparel" },
    { category: "Home Decor", url: "/shopping/Home-Decor" },
    { category: "Gift Cards", url: "/shopping/Gift-Cards" }
  ].map(item => (
    
      <div  className={classes.navCategory}>
        <Link to={item.url} className="nav-item">
          {item.category}
        </Link>
      <Link to={item.url} className={classes.navDownArrow}>
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
      </div>
    
  ));
  return (
    <div className="navigationMenu">
      <div className="customContainer">
        <div style={{display:"flex", marginLeft:"-20px"}}>{NavBar}</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(NavigationMenu);
