import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import { GoogleKeys } from "../../config/GoogleKeys";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Spinner from "../helpers/Spinner";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "130px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "130px"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "60px",
      marginBottom:"50px"    
    }
  },
  heading: {
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
     fontSize: "22px",
     padding:"10px",
     marginTop: "50px",
    }  ,
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px"
    }
  },
  devider: {
    backgroundColor: "#bfbfbf",
    marginTop: "15px"
  },
  nearMeBtn: {
    textTransform: "uppercase",
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "100%",
    margin: "0px 0px 0px 0px",
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
      marginLeft: "0px",
      width: "91%"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      width: "100%"
    }
  },
  findStoreBtn: {
    textTransform: "uppercase",
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "100%",
    margin: "1px 0px 0px 0px",
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
      marginLeft: "25px"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px"
    }
  },
  storecontainer: {
    backgroundColor: "#f2f2f2"
  },
  marginTop30px: {
    marginTop: "30px"
  },
  marginTop20px: {
    marginTop: "20px"
  },
  marginTop15px: {
    marginTop: "15px"
  },
  marginTop5px: {
    marginTop: "5px"
  },
  searchStoreGrid: {
    padding: "10px",
    marginTop: "10px",
      boxSizing:"border-box", 
      
  },
  searchStoreLblGrid: {
    borderRight: "2px Solid gray",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      borderRight: "0px Solid gray"
    }
  },
  InputText: {
    width: "100%",
    height: "35px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
    [theme.breakpoints.down("lg")]: {
      width: "37%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "87%",
      marginLeft:"25px"    
    }
  },
  avatarStyle: {
    width: "30px",
    height: "30px",
    float: "left",
    backgroundColor: "#ff8533"
  },
  labelStyle: {
    width: "auto",
    float: "left",
    paddingRight: "10px"
  },
  storesDiv: {
    padding: "10px",
    border: "1px solid #bfbfbf",
    borderRadius: "5px",
    marginTop: "10px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#bfbfbf",
      cursor: "pointer"
    }
  },

  locationDiv: {
    marginTop: "20px",
    marginLeft: "40px"
  },
  hoursDiv: {
    marginTop: "10px",
    marginLeft: "40px"
  },
  mapDiv: {
    width: "98%",
    height: "300px",
    margin: "10px",
    border: "1px solid #bfbfbf",
      [theme.breakpoints.down("xs")]: {
      width: "95%",
    }
  },
  deskTopTabView: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  mobileViewXS: {
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  },
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "40%",
    margin: "10px 0",
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
      width: "50%"
    }
  },
  select: {
    backgroundColor: "green"
  },
  spinnerDiv: {
    marginTop: "20%",
    textAlign: "center"
  }
});

const StoreFinderComponent = props => {
  const {
    classes,
    history,
    findStores,
    getStoresByLatLng,
    storeList,
    setStoreData,
    setStoreDataOnProducts,
      setStoreDataOnSearch,
    setStoreInfo,
    isLoading
  } = props;

  const [address, setAddress] = useState("40222");
  const getAddress = value => {
    setAddress(value);
  };
  const [radius, setRadius] = useState("5");
  const getRadius = value => {
    setRadius(value);
  };

  const getStoresByAddressRadius = () => {
    findStores({
      address: address,
      radius: radius
    });
  };

  const getStoresForLatLong = () => {
    const google = window.google;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return "Geolocation is not supported by this browser.";
    }
  };
  const showPosition = position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    getStoresByLatLng({
      lat: lat,
      lng: lng
    });
  };

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [activeMarker, setActiveMarker] = useState({});
  const [infoWindowMessage, setInfoWindowMessage] = useState("");
  const [latitude, setLatitude] = useState();

  const onMarkerClick = (props, marker, e) => {
    const message = e ? e.wa.target.title : "";
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    setInfoWindowMessage(message);
    setStoreData(message);
    setStoreDataOnProducts(message);
      setStoreDataOnSearch(message);

    let loggedInUserData = JSON.stringify(message);

    history.push("/");
  };

  const onMapClick = props => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  };

  console.log("isLoading", isLoading);

  const sortedStoreList = storeList
    ? storeList.sort((a, b) => {
        return a.id - b.id;
      })
    : "";

  const googleMarker = sortedStoreList
    ? sortedStoreList.map(item => (
        <Marker
          key={item.id}
          onClick={onMarkerClick}
          title={item.address}
          position={{ lat: item.lat, lng: item.lng }}
        />
      ))
    : "";

  const [indexNum, setIndexNum] = useState();

  const selectStore = item => {
    const address = item ? item.address : "";
    const storeId = item ? item.id : "";
    setIndexNum(storeId);
    props.setStoreData(address);
    props.setStoreDataOnProducts(address);
    props.setStoreDataOnSearch(address);  

    let loggedInUserData = JSON.stringify(address);

    history.push("/");
  };

  const storeDetails = isLoading ? (
    <div className={classes.spinnerDiv}>
      <Spinner />
    </div>
  ) : sortedStoreList.length ? (
    sortedStoreList.map((item, index) => (
      <div className={classes.storesDiv} key={item.id}>
        <div>
          <Avatar className={classes.avatarStyle}>{item.id}</Avatar>
          <div style={{ marginLeft: "40px" }}>
            <Typography>{item.id}</Typography>
          </div>
        </div>
        <div className={classes.locationDiv}>
          <strong className={classes.labelStyle}>Location :</strong>
          <Typography style={{ fontSize: "13px" }}>{item.address} </Typography>
        </div>
        <div className={classes.hoursDiv}>
          <strong className={classes.labelStyle}>Hours :</strong>
          <Typography style={{ fontSize: "13px" }}>
            {item.store_info}
          </Typography>
        </div>
        <Divider className={classes.devider} />
        <div style={{ textAlign: "right", marginBottom: "-10px" }}>
          <Button
            className={classes.btnStyle}
            onClick={() => selectStore(item)}
          >
            Select Store
          </Button>
        </div>
      </div>
    ))
  ) : (
    <div className={classes.spinnerDiv}>
      <strong>No Stores Found</strong>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <div>
          <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
              <Grid container className={classes.storecontainer}>
                <Grid
                  item
                  lg={4}
                  sm={5}
                  xs={12}
                  className={classes.searchStoreLblGrid}
                >
                  <div className={classes.heading}>
                    Search stores around you
                  </div>
                </Grid>
                <Grid
                  item
                  lg={8}
                  sm={7}
                  xs={12}
                  className={classes.searchStoreGrid}
                >
                  <Grid container>
                    <Grid item lg={3} sm={4} xs={5}>
                      <div style={{ fontSize: "14px", paddingTop:"6px" }}> Find a store</div>
                    </Grid>
                    <Grid item lg={3} sm={5} xs={7}>
                      <div>
                        <Button
                          className={classes.nearMeBtn}
                          onClick={getStoresForLatLong}
                        >
                          Near Me
                        </Button>
                      </div>
                    </Grid>
                  </Grid>

                  <Divider className={classes.devider} />
                  <Grid container className={classes.marginTop15px}>
                    <Grid item lg={12} sm={12} xs={12}>
                      <Grid container>
                        <Grid item lg={3} sm={4} xs={5}>
                          <div   className={classes.marginTop5px}
                            style={{ fontSize: "14px", marginRight:"10px" }}
                          >
                            Enter Zipcode or City & State
                          </div>
                        </Grid>

                        <Grid item lg={8} sm={6} xs={7}>
                          <TextField
                            id="outlined-name"
                            label=""
                            className={classes.InputText}
                            margin="normal"
                            variant="outlined"
                            placeholder=""
                            type="number"
                            value={address}
                            onChange={e => getAddress(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      sm={12}
                      xs={12}
                      className={classes.marginTop5px}
                    >
                      <Grid container>
                        <Grid item lg={3} sm={4} xs={5}>
                          <div
                            className={classes.marginTop5px}
                            style={{ fontSize: "14px" }}
                          >
                            Within miles
                          </div>
                        </Grid>
                        <Grid item lg={1} sm={1} xs={3}>
                          <TextField
                            style={{ width: "40px" }}
                            id="outlined-name"
                            label=""
                            className={classes.InputText}
                            margin="normal"
                            variant="outlined"
                            placeholder=""
                            value={radius}
                            onChange={e => getRadius(e.target.value)}
                          />
                        </Grid>
                        <Grid item lg={2} sm={3} xs={4}>
                          <Button
                            className={classes.findStoreBtn}
                            onClick={getStoresByAddressRadius}
                          >
                            Find Stores
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.devider} />
        </div>

        <div>
          <Grid container style={{ paddingTop: "10px" }}>
            <Grid item lg={4} sm={4} xs={12} className={classes.deskTopTabView}>
              {storeDetails}
            </Grid>
            <Grid item lg={8} sm={8} xs={12} className={classes.deskTopTabView}>
              <div className={classes.mapDiv} id="map">
                <Map
                  item
                  xs={12}
                  style={{ width: "59%", height: "400px" }}
                  google={props.google}
                  zoom={14}
                  initialCenter={{ lat: 38.2496307, lng: -85.5769251 }}
                  onClick={onMapClick}
                >
                  {googleMarker}
                  <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                    <div style={{ height: "50px", paddingTop: "30px" }}>
                      <Typography>{infoWindowMessage}</Typography>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </Grid>
            <Grid item lg={8} sm={8} xs={12} className={classes.mobileViewXS}>
              <div className={classes.mapDiv} id="map">
                <Map
                  item
                  xs={12}
                  style={{ width: "95%", height: "300px" }}
                  google={props.google}
                  zoom={14}
                  initialCenter={{ lat: 38.2496307, lng: -85.5769251 }}
                  onClick={onMapClick}
                >
                  {googleMarker}
                  <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
                    <Typography>{infoWindowMessage}</Typography>
                  </InfoWindow>
                </Map>
              </div>
            </Grid>

            <Grid item lg={4} sm={4} xs={12} className={classes.mobileViewXS}>
              {storeDetails}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: GoogleKeys.MAPS_KEY
})(withRouter(withStyles(styles)(StoreFinderComponent)));
