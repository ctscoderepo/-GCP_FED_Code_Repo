import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import "./index.css";

const styles = theme => ({
  root: {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100%",
    width: "100%",
    flexDirection: "column"
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
    textTransform: "capitalize",
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
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD",
      color: "#fff"
    }
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
  },
  logo: {
    width: "100px",
    height: "50px",
    display: "block",
    margin: "0 auto",
    padding: "50px 0 0 0"
  },
  register: {
    fontSize: "14px",
    textAlign: "center"
  }
});

function LoginComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
      <Link to="/"><img src="/assets/images/logo.png"
          alt="logo"
          className={classes.logo}         
        /></Link>
        <p className={classes.loginHead}>Sign in to DemoStore</p>
      </div>
      <Grid container className={classes.loginComponent}>
        <Grid lg={4} sm={4} item />
        <Grid item lg={4} sm={4} xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>
                    User name
                  </Typography>
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight}
                >
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter User name"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                  />
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Grid container>
                    <Grid item lg={6} sm={6} xs={6}>
                      <Typography className={classes.lblStyle}>
                        Password
                      </Typography>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6} className={classes.txtaln}>
                      <Typography className={classes.lblStyle}>
                        <Link to="/forgotpassword" className="link">
                          Forgot password?
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={1} sm={1} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid item lg={10} sm={10} xs={12}>
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter password"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                    type="password"
                  />
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid item lg={10} sm={10} xs={12} className={classes.txtaln}>
                  <Button className={classes.btnStyle}>LOG IN</Button>
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid item lg={10} sm={10} xs={12}>
                  <p className={classes.register}>
                    New to DemoStore?&nbsp;
                    <Link to="/Register" className="link">
                      Create account here
                    </Link>
                  </p>
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} sm={4} item />
      </Grid>
    </div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginComponent);
