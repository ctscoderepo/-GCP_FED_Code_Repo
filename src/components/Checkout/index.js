import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: "100px",
    height: "50px",
    display: "block",
    margin: "0 auto",
    float: "left",
    paddingRight: "50px"
  },
  checkoutHeader: {
    fontSize: "30px",
    color: "#333333"
  },
  paddingTop30: {
    padding: "30px 0 0 0"
  },
  addressDetails: {
    marginTop: "20px"
  },
  InputText: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px"
  },
  marginTop5: {
    marginTop: "5px"
  },
  marginTop10: {
    marginTop: "10px"
  },
  marginTop15: {
    marginTop: "15px"
  },
  rightNav: {
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: "auto",
    padding: "25px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  bgColorWhite: {
    backgroundColor: "white"
  },
  gridCartItem: {
    backgroundColor: "white",
    padding: "10px"
  },
  gridShipping: {
    backgroundColor: "white",
    padding: "10px",
    marginTop: "20px"
  },
  gridCartHeat: {
    fontSize: "18px",
    color: "#333333"
  },
  gridCartLabel: {
    width: "50%",
    float: "left"
  },
  txtAlignRight: {
    textAlign: "right"
  },
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "50%",
    margin: "30px 0px 0px 0px",
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
  PlaceOrderBtn: {
    textTransform: "uppercase",
    backgroundColor: "gray",
    borderRadius: "5px",
    width: "68%",
    margin: "30px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  radioBtn: {
    height: "30px"
  },
  selectDropDown: {
    width: "100%",
    height: "45px"
  },
  marginLeft10: {
    marginLeft: "10px"
  },
  yearSelect: {
    marginTop: "21px",
    marginLeft: "10px"
  },
  LinkColor: {
    color: "#0088cc",
    fontSize: "14px"
  }
});

const CheckoutComoponent = props => {
  const { classes, history } = props;

  const Months = [
    { month: "01 - January", Value: "1" },
    { month: "02 - February", Value: "2" },
    { month: "03 - March", Value: "3" },
    { month: "04 - April", Value: "4" },
    { month: "05 - May", Value: "5" },
    { month: "06 - June", Value: "6" },
    { month: "07 - Julu", Value: "7" },
    { month: "08 - August", Value: "8" },
    { month: "09 - September", Value: "9" },
    { month: "10 - October", Value: "10" },
    { month: "11 - November", Value: "11" },
    { month: "12 - December", Value: "12" }
  ].map(months => (
    <MenuItem
      key={months.Value}
      value={months.Value}
      style={{ height: "10px" }}
    >
      {months.month}
    </MenuItem>
  ));

  const Years = [
    { year: "2019", Value: "2019" },
    { year: "2020", Value: "2020" },
    { year: "2021", Value: "2021" },
    { year: "2022", Value: "2022" },
    { year: "2023", Value: "2023" },
    { year: "2024", Value: "2024" },
    { year: "2025", Value: "2025" },
    { year: "2026", Value: "2026" }
  ].map(years => (
    <MenuItem key={years.Value} value={years.Value} style={{ height: "10px" }}>
      {years.year}
    </MenuItem>
  ));

  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item lg={8} sm={8} xs={12}>
              <div className={classes.paddingTop30}>
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  className={classes.logo}
                />
                <Typography className={classes.checkoutHeader}>
                  Demo Store Checkout
                </Typography>
              </div>
              <Grid cotainer>
                <div className={classes.paddingTop30}>
                  <Typography className={classes.checkoutHeader}>
                    Payment
                  </Typography>
                  <Divider
                    variant="left"
                    style={{ backgroundColor: "#bfbfbf" }}
                  />
                </div>

                <div className={classes.marginTop15}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="payment" name="payment">
                      <FormControlLabel
                        className={classes.radioBtn}
                        value="Creditcard"
                        control={<Radio color="default" fontSize="small" />}
                        label="Credit Card"
                      />
                      <FormControlLabel
                        className={classes.radioBtn}
                        value="Debitcard"
                        control={<Radio color="default" />}
                        label="Debit Card"
                      />
                      <FormControlLabel
                        className={classes.radioBtn}
                        value="Netbanking"
                        control={<Radio color="default" />}
                        label="PayPal"
                      />
                      <FormControlLabel
                        className={classes.radioBtn}
                        value="Payondelivery"
                        control={<Radio color="default" />}
                        label="Pay On Delivery"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <Grid
                  item
                  lg={8}
                  sm={8}
                  xs={12}
                  className={classes.marginTop15}
                >
                  <TextField
                    id="outlined-name"
                    label=""
                    className={classes.InputText}
                    margin="normal"
                    variant="outlined"
                    placeholder="Enter card number"
                  />
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item lg={4} sm={4} xs={4}>
                      <Typography>Expiration</Typography>
                      <FormControl
                        variant="outlined"
                        className={classes.selectDropDown}
                      >
                        <Select
                          input={
                            <OutlinedInput
                              name="Expiration"
                              id="outlined-age-simple"
                            />
                          }
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {Months}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      sm={4}
                      xs={4}
                      className={classes.yearSelect}
                    >
                      <Typography />
                      <FormControl
                        variant="outlined"
                        className={classes.selectDropDown}
                      >
                        <Select
                          input={
                            <OutlinedInput
                              name="Expiration"
                              id="outlined-age-simple"
                            />
                          }
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {Years}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      sm={3}
                      xs={3}
                      className={classes.marginLeft10}
                    >
                      <Typography>CVV</Typography>
                      <TextField
                        id="outlined-name"
                        label=""
                        className={classes.InputText}
                        margin="normal"
                        variant="outlined"
                        placeholder="Enter CVV number"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                  <Checkbox
                    defaultChecked
                    color="default"
                    value="checkedG"
                    style={{ paddingLeft: "0px" }}
                  />
                  Yes, I'd like sign up
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                  <Link className={classes.LinkColor}>
                    Gift Card, Promotional Code or Voucher
                  </Link>
                </Grid>
                <Grid item lg={12} sm={12} xs={12}>
                  <Button className={classes.PlaceOrderBtn}>Place Order</Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={4} sm={4} xs={12}>
              <div className={classes.rightNav}>
                <Grid container>
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.gridCartItem}
                  >
                    <div>
                      <Typography className={classes.gridCartHeat}>
                        <strong>Your Cart Items </strong>
                      </Typography>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        Total Items in your cart
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>3 item</strong>
                      </Typography>
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        Total Cart Value
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>$900.00</strong>
                      </Typography>
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        Discount{" "}
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>$59.00</strong>
                      </Typography>
                    </div>
                    <div className={classes.marginTop10}>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        <strong>Sub total</strong>{" "}
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>$841.00</strong>
                      </Typography>
                    </div>
                    <div className={classes.txtAlignRight}>
                      <Button
                        className={classes.btnStyle}
                        onClick={() => history.push("/cart")}
                      >
                        View Cart
                      </Button>
                    </div>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.gridShipping}
                  >
                    <div>
                      <Typography className={classes.gridCartHeat}>
                        <strong>Shipping Address </strong>
                      </Typography>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography>Address Line 1 </Typography>
                      <Typography> Address Line 2 </Typography>
                      <Typography> Address Line 3 </Typography>
                      <Typography> Address Line 4 </Typography>
                      <Typography>Address Line 5 </Typography>
                    </div>
                    <div className={classes.txtAlignRight}>
                      <Button className={classes.btnStyle}>
                        Edit Shipping Address
                      </Button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.gridShipping}
                  >
                    <div>
                      <Typography className={classes.gridCartHeat}>
                        <strong>Need Help? </strong>
                      </Typography>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
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
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default withRouter(withStyles(styles)(CheckoutComoponent));
