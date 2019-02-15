import React from "react";
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
    fontWeight: theme.typography.fontWeightRegular
  },
  expansionPanel: {
    borderRadius: "0 !important"
  },
  expansionDetails: {
    padding: "0 0 10px 40px"
  }
});

function SimpleExpansionPanel(props) {
  const { classes, heading, content } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <ul className="expansionPanel">
            {content.map(item => (
              <Link to={`/shopping/${item.path}/${item.cat}`}>
                <li key={item.id}>{item.cat}</li>
              </Link>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SimpleExpansionPanel));
