import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import c1 from "../Home/images/f1.jpeg";
import "./index.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "100px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  cartBar: {
    backgroundColor: "#e6e6e6",
    height: "auto",
    padding: "10px",
    fontsize: "20px"
  },
  cartBarHead: {
    fontsize: "20px"
  },

  prilst: {
    padding: "15px"
  },
  txtaln: {
    textAlign: "right"
  },
  lineHeight: {
    height: "35px"
  },
  yourOrdTxt: {
    fontSize: "11px",
    padding: "0px 15px 0px 15px"
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
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    }
  },
  promoButton: {
    borderRadius: "5px",
    border: "1px solid #333",
    width: "70%",
    height: "39%",
    margin: "15px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#202121",
    fontWeight: "500",
    fill: "#000",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  promoInput: {
    width: "100%",
    height: "40%"
  },

  marTop: {
    marginTop: "15px"
  },
  bgcolor: {
    backgroundColor: "#bfbfbf"
  },
  marLeft: {
    margin: "10px 0 10px 15px"
  },
  subHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  needHelps: {
    [theme.breakpoints.down("lg")]: {
      display: "none"
    }
  },

  yourOrd: {
    fontSize: "20px",
    padding: "10px"
  },
  orderLblHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  seletBox: {
    width: "70%",
    heigth: "70%"
  },
  btnTextColor: {
    color: "#33adff"
  },
  padding: {
    padding: "15px"
  },
  paddingRight: {
    paddingRight: "15px"
  },
  txtAlnCenter: {
    textAlign: "center"
  },
  marButtom: {
    marginButton: "20px"
  },
  cartDiv1: {
    backgroundColor: "#f2f2f2",
    height: "auto",
    padding: "10px",
    fontsize: "20px",
    marginBottom: "30px"
  },
  dsCartHead: {
    fontSize: "30px",
    fontStyle: "italic",
    padding: "10px 0px 20px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px"
    }
  },
  shopMoreBtn: {
    width: "100%",
    Height: "auto",
    marginTop: "20px",
    border: "1px solid gray",
    "&:hover": {
      backgroundColor: "transparent"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      padding: "3px"
    }
  },
  cartLabel: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px"
    }
  },
  helpSection: {
    border: "1px solid black",
    padding: "5px",
    margin: "15px"
  },
  orderContainer: {
    padding: "25px",
    backgroundColor: "#f2f2f2",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },

  bgColorWhite: {
    backgroundColor: "#fff"
  },
  helpGrid: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    width: "100%"
  },
  menuList: {
    width: "50%",
    heigth: "50px",
    minWidth: "auto"
  },

  helpHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  recentItemHead: {
    fontSize: "24px",
    marginLeft: "15px"
  },
  devider: {
    backgroundColor: "#bfbfbf"
  },
  padding15: {
    padding: "15px"
  },
  margin5: {
    marginRight: "10px"
  },
  recentlyViewCont: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  qtyCol: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "right"
    }
  },
  shipping: {
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    }
  }
});

function CartComponent(props) {
  const { classes, history } = props;

  const cartList = [
    {
      Item: "Item 1",
      How: "Feb. 22  – Feb. 26",
      Price: "$100"
    },
    {
      Item: "Item 2",
      How: "Feb. 22  – Feb. 26",
      Qty: "2",
      Price: "$100"
    }
  ].map(item => (
    <Grid container style={{ padding: "15px" }} key={item.Item}>
      <Grid item lg={3} sm={3} xs={5}>
        <Grid container spacing={8}>
          <Grid item lg={12} sm={12} xs={12}>
            <div className="imageWrapper1">
              <img src={c1} alt="mac book prop" />
            </div>
            Item Description
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} sm={4} xs={3}>
        <div className={classes.shipping}>
          Ship to Home FREE Estimated Arrival: <br />
          {item.How}
        </div>
      </Grid>
      <Grid item lg={3} sm={3} xs={2} display="flex" className={classes.qtyCol}>
        <button className="qtyBtn">-</button> <span className="qty">1</span>
        <button className="qtyBtn">+</button>
      </Grid>
      <Grid item lg={2} sm={2} xs={2} style={{ textAlign: "right" }}>
        {item.Price}
      </Grid>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        style={{ textAlign: "right", marginBottom: "10px" }}
      >
        <Link style={{ padding: "0 10px", color: "#33adff" }}>
          Save for later
        </Link>
        <Link style={{ padding: "0 10px", color: "#33adff" }}>Remove</Link>
      </Grid>
      <Divider variant="middle" style={{ backgroundColor: "#bfbfbf" }} />
    </Grid>
  ));
  return (
    <div className="cartComponent">
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item lg={8} sm={8} xs={12} className={classes.padding}>
            <Grid container className={classes.cartDiv1}>
              <Grid item lg={8} sm={8} xs={8}>
                <div className={classes.dsCartHead}>Your Shopping Cart</div>
              </Grid>
              <Grid item lg={4} sm={4} xs={4}>
                <Typography>Shop More</Typography>
                <Button
                  className={classes.shopMoreBtn}
                  onClick={() => history.push("/")}
                >
                  Continue Shopping
                </Button>
              </Grid>
              <Grid item lg={12} sm={12} xs={12}>
                <div className={classes.cartLabel}>
                  <strong>
                    FREE Shipping on eligible items.<Link> See Details</Link>
                  </strong>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item lg={12} sm={12} xs={12} className={classes.marLeft}>
                <Grid container className={classes.marTop}>
                  <Grid item lg={3} sm={3} xs={5}>
                    <strong>Item</strong>
                  </Grid>
                  <Grid item lg={4} sm={4} xs={3}>
                    <strong>Shipping</strong>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    sm={3}
                    xs={2}
                    className={classes.txtAlnCenter}
                  >
                    <strong>Qty</strong>
                  </Grid>
                  <Grid item lg={2} sm={2} xs={2}>
                    <strong>Item Total</strong>
                  </Grid>
                </Grid>
                <Divider
                  variant="middle"
                  style={{ backgroundColor: "#bfbfbf", marginTop: "10px" }}
                />
              </Grid>
              <Grid item lg={12} sm={12} xs={12}>
                {cartList}
              </Grid>
              <Grid item lg={12} sm={12} xs={12}>
                <Grid container className={classes.subHide}>
                  <Grid item lg={2} sm={2} xs={2} />
                  <Grid item lg={5} sm={5} xs={5}>
                    <Grid container className={classes.needHelps}>
                      <Typography>
                        <strong>Need Help?</strong>
                      </Typography>
                      <Typography> See ouronline FAQs or phone us:</Typography>
                      <Typography>
                        {" "}
                        Online Customer Support:1-800-000-0000
                      </Typography>
                      <Typography>Major Appliances:1-000-000-0000 </Typography>
                      <Typography>Custom Blinds:1-800-000-0000 </Typography>
                      <Typography>
                        Call 7 days a week - 6 a.m. to 2 a.m. EST
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={5} sm={5} xs={5}>
                    <Grid container className={classes.marTop}>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography className={classes.txtaln}>
                          Items : <strong>2</strong>
                        </Typography>
                      </Grid>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography className={classes.txtaln}>
                          Subtotal:<strong>$200</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.recentlyViewCont}>
              <Grid item lg={12} sm={12} xs={12}>
                <div>
                  <Typography className={classes.recentItemHead}>
                    <strong>Your recently viewed items </strong>
                  </Typography>
                  <Divider variant="middle" className={classes.devider} />
                </div>
                <Grid item lg={12} sm={12} xs={12}>
                  <Grid container className={classes.padding15}>
                    <Grid item lg={3} sm={3} xs={3} className={classes.margin5}>
                      <div className="imageWrapper1">
                        <img src={c1} alt="mac book prop" />
                      </div>
                    </Grid>
                    <Grid item lg={3} sm={3} xs={3} className={classes.margin5}>
                      <div className="imageWrapper1">
                        <img src={c1} alt="mac book prop" />
                      </div>
                    </Grid>

                    <Grid item lg={3} sm={3} xs={3} className={classes.margin5}>
                      <div className="imageWrapper1">
                        <img src={c1} alt="mac book prop" />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={4} sm={4} xs={12}>
            <Grid container className={classes.orderContainer}>
              <Grid
                item
                lg={12}
                sm={12}
                xs={12}
                className={classes.bgColorWhite}
              >
                <div className={classes.orderLblHide}>
                  <Typography className={classes.yourOrd}>
                    <strong>Your Order</strong>
                  </Typography>
                  <Divider variant="middle" className={classes.bgcolor} />
                </div>
                <Grid container className={classes.prilst}>
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>
                          <strong>Subtotal</strong>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        $200
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>
                          <strong>Discount</strong>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        -$24
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>Estimated Shipping*</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        $50
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>Sales Tax</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        ----
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider variant="middle" className={classes.bgcolor} />
                <Grid item lg={12} sm={12} xs={12}>
                  <Grid container className={classes.prilst}>
                    <Grid item lg={6} sm={6} xs={6}>
                      <Typography>
                        <strong>Total</strong>
                      </Typography>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6} className={classes.txtaln}>
                      $274
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12} sm={12} xs={12} className={classes.marLeft}>
                  <Grid container>
                    <Typography>
                      <Button className={classes.btnTextColor}>
                        Add A Promotional Code
                      </Button>
                    </Typography>
                    <Grid item lg={12} sm={12} xs={12}>
                      <Grid
                        container
                        specing={8}
                        className={classes.paddingRight}
                      >
                        <Grid item lg={8} sm={8} xs={8}>
                          <TextField
                            id="outlined-name"
                            label=""
                            className={classes.promoInput}
                            margin="normal"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid
                          item
                          lg={4}
                          sm={4}
                          xs={4}
                          className={classes.txtaln}
                        >
                          <Button className={classes.promoButton}>Apply</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  lg={12}
                  sm={12}
                  xs={12}
                  style={{ marginTop: "-20px" }}
                >
                  <div className={classes.yourOrdTxt}>
                    Shipping and delivery charges are calculated at the lowest
                    rate available. Other methods will be viewable on the next
                    page.
                    <Button
                      className={classes.btnStyle}
                      onClick={() => history.push("/Checkout")}
                    >
                      CHECKOUT
                    </Button>
                  </div>
                  <div className={classes.txtAlnCenter}>--or--</div>
                  <div className={classes.txtAlnCenter}>
                    <Link>Check out with</Link>
                    <Button className={classes.marLeft} variant="contained">
                      PayPal / Visa{" "}
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid container className={classes.helpHide}>
                <div className={classes.helpGrid}>
                  <div>
                    {" "}
                    <Typography>
                      <strong>Need Help?</strong>
                    </Typography>
                  </div>
                  <div>
                    <Typography> See ouronline FAQs or phone us:</Typography>
                    <Typography>
                      Online Customer Support:1-800-000-0000
                    </Typography>
                    <Typography>Major Appliances:1-000-000-0000 </Typography>
                    <Typography>Custom Blinds:1-800-000-0000 </Typography>
                    <Typography>
                      Call 7 days a week - 6 a.m. to 2 a.m. EST
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

CartComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(CartComponent));
