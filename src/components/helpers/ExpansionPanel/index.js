import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./index.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
      fontWeight:"bold"
  },
  expansionPanel: {
    borderRadius: "0 !important"
  },
  expansionDetails: {
    padding: "0 0 10px 40px"
  },
    svgRightArrow:{
        width:"auto",
        float:"left",
        paddingTop:"6px",
        paddingRight:"5px"
    },
    sideNavMainDiv:{
        marginLeft:"-10px",
        width:"100%",
    },
});


function SimpleExpansionPanel(props) {
  const { classes, heading, content, activePanel, history } = props;


  const [load, setLoad] = useState(false);


  const pathArray = window.location.pathname.split('/');
  let expanded = pathArray[1] != "search" ? 
                  (pathArray[2].indexOf('-') > -1 ? 
                        pathArray[2].replace("-", " ") : pathArray[2]) : (activePanel?activePanel.category:null);

  const [expand, setExpanded] = useState(expanded);
  //console.log("expand " , expand ,  "expanded ", expanded, "activePanel : ", activePanel, "heading :", heading);

  useEffect(() => {
    setLoad(prev => !prev);
    setExpanded(activePanel?activePanel.category:window.location.pathname.split('/')[2])
  }, [window.location.href, activePanel ])


  const [itemValue, setItemValue] = useState(1);
  const handleActive = (val) => {
    setItemValue(val);
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}
        expanded={expand === heading}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} onClick={() => { history.push(`/shopping/${heading}`) }}>{heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <div className={classes.sideNavMainDiv}>
            {typeof content === 'string' ? (content) : content.map(item => (
              <Link to={`/shopping/${item.path}/${item.cat}`} key={item.id} >
                <svg className={classes.svgRightArrow} 
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                    fill="gray"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
                <div style={{padding:"10px", fontSize:"14px"}} className={item.id === itemValue ? "active" : null}
                  onClick={() => handleActive(item.id)}
                >{item.cat}</div>
              </Link>
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SimpleExpansionPanel));
