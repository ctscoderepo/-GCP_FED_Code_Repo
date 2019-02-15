import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
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
    borderRadius: "5px",
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
  loginHead: {
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
          <Typography className={classes.loginHead}>Registered User</Typography>
          <Grid container className={classes.divStyle}>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Typography className={classes.lblStyle}>User name</Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight}>
              <TextField
                id="outlined-bare"
                placeholder="Enter User name"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.rowHeight30}>
              <Grid container>
                <Grid item lg={6} sm={6} xs={6}>
                  <Typography className={classes.lblStyle}>Password</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={6} className={classes.txtaln}>
                  <Typography className={classes.lblStyle}>
                    <Link>Forgot password?</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <TextField
                id="outlined-bare"
                placeholder="Enter password"
                margin="normal"
                variant="outlined"
                className={classes.txtStyle}
                Type="password"
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12} className={classes.txtaln}>
              <Button className={classes.btnStyle}>LOG IN</Button>
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
