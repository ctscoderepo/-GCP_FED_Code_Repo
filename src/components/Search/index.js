import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  searchStyle:{
    zIndex:'2000'
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    color: "#000",
    borderRadius: "0 3px 3px 0px"
  },
  inputRoot: {
    color: "#000",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingLeft: theme.spacing.unit ,
    paddingRight: theme.spacing.unit*2 ,
    width: "100%",
    backgroundColor: "#efeded",
    borderRadius: "3px",
    margin:'0 10px'
  },
  appBar: {
    backgroundColor: "#fff"
  }
});

class ResponsiveDialog extends React.Component {
  state = {
    open: this.props.open,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.closeSearch(false);
    this.setState({ open: false });
  };

  render() {
    const { fullScreen ,classes} = this.props;

    return (
      <>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          className={classes.searchStyle}
        >
          <DialogTitle id="responsive-dialog-title">
             <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Grid container>
                        <Grid item xs={1}>
                          <i className="material-icon" onClick={this.handleClose}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>
                          </i>
                        </Grid>
                        <Grid item xs={10} >
                          <div className={classes.search}>
                              <div className={classes.searchIcon}>
                                <SearchIcon />
                              </div>
                              <InputBase
                                placeholder="Search DemoStore"
                                classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput
                                }}
                              />
                          </div>     
                        </Grid>
                        <Grid item xs={1}>
                          <i className={`material-icon ${classes.camera}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
                          </i>
                        </Grid>
                    </Grid>
                  </Toolbar>
            </AppBar>
          </DialogTitle>
        </Dialog>
      </>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(withStyles(styles)(ResponsiveDialog));