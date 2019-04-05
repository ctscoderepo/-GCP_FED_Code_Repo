import React, { useState, useEffect } from "react";
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
import NumberFormat from "react-number-format";
//import "./index.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: "100px",
    height: "70px",
    display: "block",
    margin: "0 auto",
    float: "left",
    paddingRight: "50px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px"
    }
  },
  checkoutHeader: {
    fontSize: "30px",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "nowrap",
      marginTop: "15px"
    }
  },
  securedCheckout: {
    fontSize: "30px",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "nowrap",
      paddingTop: "15px"
    }
  },
  paymentHeader: {
    fontSize: "30px",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "nowrap",
      marginTop: "-20px"
    }
  },

  paddingTop30: {
    padding: "30px 0 0 0"
  },
  addressDetails: {
    marginTop: "20px"
  },
  InputText: {
    width: "100%",
    height: "35px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px"
  },
  InputTextCVV: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px"
  },
  InputFirstLastName: {
    width: "100%",
    height: "35px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      width: "100"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  InputTextError: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
    borderBottom: "solid 3px red",
    borderRadius: "5px"
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
  marginTop40: {
    marginTop: "40px"
  },
  rightNav: {
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: "99%",
    padding: "25px",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
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
    float: "left",
    whiteSpace: "nowrap"
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
    },
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "nowrap",
      width: "100%"
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
  },
  FirstNamePad: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px"
    }
  },
  btnDisabled: {
    opacity: "0.65",
    cursor: "not-allowed",
    textTransform: "uppercase",
    backgroundColor: "#008000",
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
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  checkoutContainer: {
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px"
    }
  },

  btnViewCart: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left"
    }
  },
  shippingHead: {
    paddingTop: "30px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px"
    }
  },
  zipCode1: {
    marginTop: "40px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px"
    }
  },

  mainDiv: {
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "120px"
    }
  },
  dividerClass: {
    backgroundColor: "#d9d9d9",
    marginTop: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginBottom: "10px"
    }
  },
  checkoutCount: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px"
  },
  checkoutCont: {
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      margin: "10px"
    }
  },
  shippingAddress: {
    fontWeight: "bold"
  },
  shippingItemId: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px"
    }
  },
  addressChangeBtn: {
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "50%",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#009900"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  orderTotalDiv: {
    fontSize: "20px",
    color: "#ff5500"
  },
  placeOrderBtnNew: {
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "80%",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    height: "40px",
    "&:hover": {
      backgroundColor: "#009900"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },

  saveAddressBtn: {
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "50%",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    height: "40px",
    marginTop: "-10px",
    "&:hover": {
      backgroundColor: "#009900"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },

  placeorderDiv: {
    border: "1px solid #cccccc",
    marginTop: "50px",
    padding: "10px",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  orderSummary: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px"
    }
  },
  orderSummarySection: {
    border: "1px solid #cccccc",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px"
    }
  },
  orderSummarySection1: {
    margin: "30px",
    padding:"5px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px"
    }
  },
  placeOrderBtnOrdSummary: {
    backgroundColor: "gray",
    borderRadius: "5px",
    width: "100%",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    height: "40px",
    "&:hover": {
      backgroundColor: "#0084CD"
    }
  },
  xsClass: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px"
    }
  },
  changeAddress: {
    display: "none"
  },
  changeAddress1: {
    display: "block"
  },
  addressLines: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px"
    }
  },
  shippingCalc: {
    padding: "10px 30px 20px 30px",
    backgroundColor: "#f2f2f2",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
      marginTop: "20px",
      paddingTop: "10px"
    }
  },
  addressGrid: {
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px"
    }
  },
  checkoutImgs: {
    width: "130px",
    height: "150px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%"
    }
  },
  itemDescripiton: {
    marginTop: "10px",
    height: "10px",
    width: "90%",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingLeft: "10px"
    }
  },
  errorMessage: {
    color: "red",
    textAlign: "right",
    fontSize: "12px"
  },
    cardNumDiv:{
        marginTop: "10px",
        width: "95%",
          [theme.breakpoints.down("sm")]: {
        width: "98%",
    },
        [theme.breakpoints.down("xs")]: {
        width: "98%",
    }
    },
});

const AuthUserCheckout = props => {
  const { classes, history, cartItems } = props;

  console.log("From checkout ", cartItems);
  const orderItems = cartItems ? cartItems.orderItems : "";

  const [totalQuantity, setTotalQuantity] = useState();
  let orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

  useEffect(() => {
    if (orderItems) {
      let count = 0;
      orderItems.forEach(item => {
        count = count + item.quantity;
      });
      setTotalQuantity(count);
    }
  });

  const totalCheckOutValue = cartItems.totalPrice
    ? cartItems.totalPrice + cartItems.totalShipping + cartItems.totalTax
    : 0;

  //const [guestEmail, setguestEmail] = useState("");
  const [errorGuestEmail, setErrorGuestEmail] = useState("");

  const [fName, setFName] = useState("");
  const [errorFName, setErrorFName] = useState("");

  const [lName, setLName] = useState("");
  const [errorLName, setErrorLName] = useState("");

  const [phone, setphone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const [shipping, setShipping] = useState("");
  const [errorShipping, setErrorShipping] = useState("");

  const handleguestEmail = value => {
    setEmail(value);
    orderDetails.email = value;
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  };

  const handleEmail = value => {
    setErrorGuestEmail(value);
  };

  const handleFName = value => {
    setFName(value);
  };
  const handleLName = value => {
    setLName(value);
  };
  const handlePhone = value => {
    setphone(value);
  };

  const handleShipping = value => {
    setShipping(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (fName.length === 0) {
      setErrorFName("Please enter your full name");
    } else {
      setErrorFName("");
    }

    if (phone.length === 0) {
      setErrorPhone("Please enter your phone number");
    } else {
      setErrorPhone("");
    }

    if (shipping.length === 0) {
      setErrorShipping("Please enter shipping address");
    } else {
      setErrorShipping("");
    }
    if (email.length === 0) {
      setErrorGuestEmail("Please enter email address");
    } else {
      setErrorGuestEmail("");
    }
  };

  const orderId = cartItems && cartItems.orderId ? cartItems.orderId : 0;

  let userInfo1 = JSON.parse(localStorage.getItem("loggedInUserData"));
  const userData = userInfo1 ? userInfo1.userDetails : "";
  const memberId = userData ? userData.id : "";
  const addressId = userData ? userData.address.id : "";
  //const email=userData?userData.logonId:"";
  const userAddress = userData ? userData.address : "";

  const [email, setEmail] = useState(userData ? userData.logonId : "");

  const checkoutCart = () => {
    if (memberId == 0) {
      props.checkout({
        orderId: orderId,
        email: email,
        addressId: addressId
      });
    } else {
      props.checkout({
        orderId: orderId,
        memberId: memberId,
        addressId: addressId
      });
    }
    history.push("/Confirmation");
  };

  const [monthExpir, setMonthExpir] = useState("");
  const [yearExpir, setYearExpir] = useState("");
  const [btnEnabled, setBtnEnabled] = useState(false);

  const [cardNum, setCardNum] = useState("");
  const handleCardNum = value => {
    setCardNum(value);
  };
  const [cvvNum, setCvvNum] = useState("");
  const handleCVV = value => {
    setCvvNum(value);
  };

  const [cardType, setCardType] = useState("Debit card");
  const selectCardType = value => {
    setCardType(value);
  };
  const handleMonthChange = event => {
    const val = event.target.value;
    setMonthExpir(val);
  };
  const handleYearChange = event => {
    const val = event.target.value;
    setYearExpir(val);
  };

  const enabledBtn =
    cardNum != "" &&
    monthExpir != "" &&
    yearExpir != "" &&
    cvvNum != "" &&
    cardType != ""
      ? true
      : false;

  const Months = [
    { month: "01 - January", Value: "1" },
    { month: "02 - February", Value: "2" },
    { month: "03 - March", Value: "3" },
    { month: "04 - April", Value: "4" },
    { month: "05 - May", Value: "5" },
    { month: "06 - June", Value: "6" },
    { month: "07 - July", Value: "7" },
    { month: "08 - August", Value: "8" },
    { month: "09 - September", Value: "9" },
    { month: "10 - October", Value: "10" },
    { month: "11 - November", Value: "11" },
    { month: "12 - December", Value: "12" }
  ].map(months => (
    <MenuItem
      key={months.Value}
      value={months.month}
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

  const orderItemsList = cartItems ? cartItems.orderItems : "";

  const reviewItemsList = orderItemsList ? (
    orderItemsList.map(item => (
      <div style={{ marginTop: "10px" }}>
        <Grid container key={item.id}>
          <Grid item lg={3} sm={3} xs={3}>
            <div>
              <img className={classes.checkoutImgs} src={item.imageUrl} />
            </div>
          </Grid>
          <Grid item lg={9} sm={9} xs={9}>
            <div>
              <Typography className={classes.shippingItemId}>
                {item.productId}
              </Typography>
            </div>
            <div className={classes.itemDescripiton}>
              {item.productDesciption}
            </div>
          </Grid>
        </Grid>
      </div>
    ))
  ) : (
    <div>No items in cart</div>
  );

  const [isAddressSection, setIsAddressSection] = useState(
    addressId ? false : true
  );

  const changeAddress = () => {
    setIsAddressSection(true);
  };

  const saveAddress = () => {
    if (fName && phone && shipping) {
      setIsAddressSection(false);
    }
  };
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.checkoutCount}>
          Checkout ({orderItemsList ? orderItemsList.length : "0"} Items)
        </div>
        <Divider variant="left" className={classes.dividerClass} />
        <div className={classes.checkoutCont}>
          <Grid container spacing={24}>
            <Grid item lg={12} sm={12} xs={12}>
              <Grid container>
                <Grid item lg={8} sm={8} xs={12}>
                  <div className={classes.addressGrid}>
                    <Grid container>
                      <Grid item lg={12} sm={12} xs={12}>
                        <Grid container>
                          <Grid item lg={4} sm={4} xs={12}>
                            <div>
                              <Typography className={classes.shippingAddress}>
                                1. Shipping address{" "}
                              </Typography>
                            </div>
                          </Grid>
                          <Grid
                            item
                            lg={4}
                            sm={5}
                            xs={8}
                            className={
                              isAddressSection
                                ? classes.changeAddress
                                : classes.changeAddress1
                            }
                          >
                            <div className={classes.addressLines}>
                              <div style={{ height: "30px" }}>
                                <Typography>
                                  {fName ? fName : "Address line 1"}
                                </Typography>
                              </div>
                              <div style={{ height: "30px" }}>
                                <Typography>
                                  {phone ? phone : "Address line 2"}
                                </Typography>
                              </div>
                              <div style={{ height: "30px" }}>
                                <Typography>
                                  {shipping ? shipping : "Address line 3"}
                                </Typography>
                              </div>
                              <div style={{ height: "30px" }}>
                                <Typography>
                                  {email ? email : "Enter Email"}
                                </Typography>
                              </div>
                            </div>
                          </Grid>
                          <Grid
                            item
                            lg={4}
                            sm={3}
                            xs={4}
                            className={classes.xsClass}
                            className={
                              isAddressSection
                                ? classes.changeAddress
                                : classes.changeAddress1
                            }
                          >
                            <Button
                              className={classes.addressChangeBtn}
                              onClick={changeAddress}
                            >
                              Change
                            </Button>
                          </Grid>

                          <Grid
                            item
                            lg={8}
                            sm={8}
                            xs={12}
                            className={
                              isAddressSection
                                ? classes.changeAddress1
                                : classes.changeAddress
                            }
                          >
                            <div>
                              <form onSubmit={handleSubmit}>
                                <div>
                                  <div>
                                    <Typography>Email :</Typography>
                                  </div>
                                  <div className="marginTop10">
                                    <TextField
                                      id="outlined-name"
                                      label=""
                                      className={classes.InputText}
                                      margin="normal"
                                      variant="outlined"
                                      placeholder="Please enter Email"
                                      value={email}
                                      inputProps={{ style: inputStyle }}
                                      onChange={e =>
                                        handleguestEmail(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div>
                                    {errorGuestEmail && (
                                      <div className={classes.errorMessage}>
                                        {errorGuestEmail}
                                      </div>
                                    )}
                                  </div>
                                  <div>
                                    <Typography>Full Name :</Typography>
                                  </div>
                                  <div className="marginTop10">
                                    <TextField
                                      id="outlined-name"
                                      label=""
                                      className={classes.InputFirstLastName}
                                      margin="normal"
                                      variant="outlined"
                                      placeholder="Enter full name"
                                      value={fName.fName}
                                      inputProps={{ style: inputStyle }}
                                      onChange={e =>
                                        handleFName(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div>
                                    {errorFName && (
                                      <div className={classes.errorMessage}>
                                        {errorFName}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <Typography>Phone Number :</Typography>
                                  </div>
                                  <div className="marginTop10">
                                    <NumberFormat
                                      placeholder="Enter Phone Number"
                                      onChange={e =>
                                        handlePhone(e.target.value)
                                      }
                                      className={classes.InputText}
                                      variant="outlined"
                                      customInput={TextField}
                                      format="(+1) ###-###-####"
                                      mask="_"
                                    />
                                  </div>

                                  <div>
                                    {errorPhone && (
                                      <div className={classes.errorMessage}>
                                        {errorPhone}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <Typography>Shipping Address :</Typography>
                                  </div>
                                  <div className="marginTop10">
                                    <TextField
                                      id="outlined-name"
                                      label=""
                                      className={classes.InputText}
                                      margin="normal"
                                      variant="outlined"
                                      placeholder="Enter Street, City, State, Country"
                                      value={shipping.shipping}
                                      inputProps={{ style: inputStyle }}
                                      onChange={e =>
                                        handleShipping(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div>
                                    {errorShipping && (
                                      <div className={classes.errorMessage}>
                                        {errorShipping}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    marginTop: "30px"
                                  }}
                                >
                                  <Button
                                    className={classes.saveAddressBtn}
                                    type="submit"
                                    onClick={saveAddress}
                                  >
                                    Save Address
                                  </Button>
                                </div>
                              </form>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={12} sm={12} xs={12}>
                        <Divider
                          variant="left"
                          className={classes.dividerClass}
                        />
                        <Grid container>
                          <Grid item lg={4} sm={4} xs={12}>
                            <div>
                              <Typography className={classes.shippingAddress}>
                                2. Payment method{" "}
                              </Typography>
                            </div>
                          </Grid>
                          <Grid
                            item
                            lg={8}
                            sm={8}
                            xs={12}
                            className={classes.xsClass}
                          >
                            <div className={classes.addressLines}>
                              <FormControl component="fieldset">
                                <RadioGroup aria-label="payment" name="payment">
                                  <FormControlLabel
                                    onChange={e =>
                                      selectCardType(e.target.value)
                                    }
                                    className={classes.radioBtn}
                                    value="Credit card"
                                    control={
                                      <Radio
                                        color="default"
                                        fontSize="small"
                                        checked={cardType === "Credit card"}
                                      />
                                    }
                                    label="Credit Card"
                                  />
                                  <FormControlLabel
                                    onChange={e =>
                                      selectCardType(e.target.value)
                                    }
                                    className={classes.radioBtn}
                                    value="Debit card"
                                    control={
                                      <Radio
                                        color="default"
                                        checked={cardType === "Debit card"}
                                      />
                                    }
                                    label="Debit Card"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                            <div className={classes.cardNumDiv} >
                              <NumberFormat
                                placeholder="Enter Card Number"
                                onChange={e => handleCardNum(e.target.value)}
                                className={classes.InputText}
                                variant="outlined"
                                customInput={TextField}
                                format="#### #### #### ####"
                                mask="_"
                              />
                            </div>
                            <div>
                              <Grid container>
                                <Grid item lg={4} sm={4} xs={4}>
                                  <Typography>Expiration</Typography>
                                  <FormControl
                                    variant="outlined"
                                    className={classes.selectDropDown}
                                  >
                                    <Select
                                      value={monthExpir}
                                      onChange={handleMonthChange}
                                      input={
                                        <OutlinedInput
                                          name="month"
                                          id="month"
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
                                      value={yearExpir}
                                      onChange={handleYearChange}
                                      input={
                                        <OutlinedInput name="year" id="year" />
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

                                  <NumberFormat
                                    placeholder="CVV"
                                    onChange={e => handleCVV(e.target.value)}
                                    className={classes.InputTextCVV}
                                    variant="outlined"
                                    customInput={TextField}
                                    format="###"
                                    mask="_"
                                  />
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={12} sm={12} xs={12}>
                        <Divider
                          variant="left"
                          className={classes.dividerClass}
                        />
                        <div>
                          <Typography className={classes.shippingAddress}>
                            3. Review items and shipping
                          </Typography>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                          {reviewItemsList}
                        </div>
                      </Grid>

                      <Grid item lg={12} sm={12} xs={12}>
                        <div className={classes.placeorderDiv}>
                          <Grid container>
                            <Grid item lg={8} sm={7} xs={8}>
                              <div className={classes.orderTotalDiv}>
                                Order Total $
                                {cartItems.totalPrice
                                  ? cartItems.totalPrice +
                                    cartItems.totalShipping +
                                    cartItems.totalTax
                                  : 0}
                              </div>
                              <div>
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                              </div>
                            </Grid>
                            <Grid item lg={4} sm={5} xs={4}>
                              <Button
                                className={
                                  enabledBtn
                                    ? classes.placeOrderBtnNew
                                    : classes.btnDisabled
                                }
                                onClick={checkoutCart}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="white"
                                >
                                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                                </svg>
                                <Typography
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    fontSize: "12px"
                                  }}
                                >
                                  {" "}
                                  Place Your Order{" "}
                                </Typography>
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>

                <Grid item lg={4} sm={4} xs={12}>
                  <div className={classes.orderSummarySection}>
                    <div className={classes.orderSummarySection1}>
                      <div>
                        {" "}
                        <Typography className={classes.orderSummary}>
                          Order Summary
                        </Typography>
                      </div>
                      <Divider
                        variant="left"
                        style={{ marginTop: "5px", marginBottom: "20px" }}
                      />

                      <Grid container>
                        <Grid item lg={12} sm={12} xs={12}>
                          <Grid container>
                            <Grid item lg={8} sm={8} xs={8}>
                              <div>
                                <Typography>
                                  <strong>Items (1) :</strong>
                                </Typography>
                              </div>
                              <div style={{ marginTop: "15px" }}>
                                <Typography>
                                  <strong>Shipping & handling</strong>
                                </Typography>
                              </div>
                              <div style={{ marginTop: "30px" }}>
                                <Typography>
                                  <strong>Total before tax :</strong>
                                </Typography>
                              </div>
                              <div style={{ marginTop: "15px" }}>
                                <Typography>
                                  <strong>
                                    Estimated tax to be collected :
                                  </strong>
                                </Typography>
                              </div>
                            </Grid>

                            <Grid item lg={4} sm={4} xs={4}>
                              <div style={{ textAlign: "right" }}>
                                $
                                {cartItems.totalPrice
                                  ? cartItems.totalPrice
                                  : 0}
                                .00
                              </div>
                              <div
                                style={{
                                  marginTop: "15px",
                                  textAlign: "right"
                                }}
                              >
                                $
                                {cartItems.totalShipping
                                  ? cartItems.totalShipping
                                  : 0}
                                .00
                              </div>
                              <Divider
                                variant="left"
                                style={{
                                  marginTop: "20px",
                                  marginBottom: "20px"
                                }}
                              />
                              <div
                                style={{
                                  marginTop: "15px",
                                  textAlign: "right"
                                }}
                              >
                                $
                                {cartItems.totalPrice
                                  ? cartItems.totalPrice +
                                    cartItems.totalShipping
                                  : 0}
                                .00
                              </div>
                              <div
                                style={{
                                  marginTop: "15px",
                                  textAlign: "right"
                                }}
                              >
                                {" "}
                                ${cartItems.totalTax ? cartItems.totalTax : 0}
                                .00
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid
                          item
                          lg={12}
                          sm={12}
                          xs={12}
                          style={{ marginTop: "20px" }}
                        >
                          <Grid container>
                            <Grid item lg={8} sm={8} xs={8}>
                              <div className={classes.orderTotalDiv}>
                                Order Total
                              </div>
                            </Grid>
                            <Grid item lg={4} sm={4} xs={4}>
                              <div
                                className={classes.orderTotalDiv}
                                style={{ textAlign: "right" }}
                              >
                                $
                                {cartItems.totalPrice
                                  ? cartItems.totalPrice +
                                    cartItems.totalShipping +
                                    cartItems.totalTax
                                  : 0}
                                .00
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <div>
                        <Divider
                          variant="left"
                          style={{ marginTop: "20px", marginBottom: "20px" }}
                        />
                        <div>
                          <Button
                            className={
                              enabledBtn
                                ? classes.placeOrderBtnNew
                                : classes.btnDisabled
                            }
                            onClick={checkoutCart}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="white"
                            >
                              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                            </svg>
                            <Typography
                              style={{
                                marginLeft: "20px",
                                color: "white",
                                fontSize: "12px"
                              }}
                            >
                              {" "}
                              Place Your Order{" "}
                            </Typography>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className={classes.shippingCalc}>
                      <div>
                        <Typography style={{ color: "#1aa3ff" }}>
                          {" "}
                          How are shipping costs calculated?{" "}
                        </Typography>{" "}
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default withRouter(withStyles(styles)(AuthUserCheckout));
