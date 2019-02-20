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
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    }
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
  },
  logo: {
    width: "100px",
    height: "50px",
    display: "block",
    margin: "0 auto",
    padding: "20px 0 0 0"
  },
  login: {
    fontSize: "14px",
    textAlign: "center"
  }
});

function LoginComponent(props) {
  const { classes, history } = props;

  return (
    <div className={classes.root}>
      <div>
      <Link to="/"><img
          src="/assets/images/logo.png"
          alt="logo"
          className={classes.logo}
        /></Link>
        <p className={classes.registerHead}>Register to DemoStore</p>
      </div>
      <Grid container>
        <Grid lg={4} sm={4} xs={12} item />
        <Grid item lg={4} sm={4} xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>
                    First Name :
                  </Typography>
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight}
                >
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter First Name"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                  />
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>
                    Last Name :
                  </Typography>
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight}
                >
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter Last Name"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                  />
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>Email :</Typography>
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight}
                >
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter E-mail"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                  />
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>
                    Password :
                  </Typography>
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight}
                >
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter Password"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                  />
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>Phone :</Typography>
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid item lg={10} sm={10} xs={12}>
                  <TextField
                    id="outlined-bare"
                    placeholder="Enter Phone number"
                    margin="normal"
                    variant="outlined"
                    className={classes.txtStyle}
                  />
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid lg={1} sm={1} item />
                <Grid item lg={10} sm={10} xs={12} className={classes.txtaln}>
                  <Button className={classes.btnStyle}>REGISTER</Button>
                </Grid>
                <Grid lg={1} sm={1} item />
              </Grid>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid item lg={10} sm={10} xs={12}>
                  <p className={classes.login}>
                    Already DemoStore?&nbsp;
                    <Link to="/login" className="link">
                      Login here
                    </Link>
                  </p>
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} sm={4} xs={12} item />
      </Grid>
    </div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginComponent);
