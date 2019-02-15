import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  wid50: {
    width: "200px",
    float: "left",
    border: "1px solid black"
  },
  divStyle: {
    backgroundColor: "#fff",
    width: "100%",
    margin: "10px 0",
    border: "1px solid #202121",
    padding: "10px"
  },
  lblStyle: {
    margin: "20px 0px",
    textAlign: "left"
  },
  txtStyle: {
    width: "100%",
    height: "30px"
  },
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "10px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "500",
    fill: "#000"
  },
  txtaln: {
    textAlign: "right"
  },
  width100: {
    width: "100%"
  },
  reghide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  rowHeight: {
    height: "40px"
  },
  rowHeight30: {
    height: "30px"
  },

  registerHead: {
    textAlign: "center",
    fontSize: "24px"
  }
});

function LoginComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8} direction="column" align="center">
        <Grid item lg={5} sm={5} xs={12}>
          <Typography className={classes.registerHead}>Register</Typography>
          <Grid container className={classes.divStyle}>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Typography className={classes.lblStyle}>First Name :</Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight}>
              <TextField
                id="outlined-bare"
                placeholder="Enter First Name"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Typography className={classes.lblStyle}>Last Name :</Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight}>
              <TextField
                id="outlined-bare"
                placeholder="Enter Last Name"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Typography className={classes.lblStyle}>Email :</Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight}>
              <TextField
                id="outlined-bare"
                placeholder="Enter E-mail"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Typography className={classes.lblStyle}>Password :</Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight}>
              <TextField
                id="outlined-bare"
                placeholder="Enter Password"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Typography className={classes.lblStyle}>Phone :</Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <TextField
                id="outlined-bare"
                placeholder="Enter Phone number"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.txtaln}>
              <Button className={classes.btnStyle}>REGISTER</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginComponent);
