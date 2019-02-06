import React from 'react';
import { withStyles } from '@material-ui/core/styles'; 

const styles = theme => ({
  location:{
  	display:'flex',
  	flexDirection:"row",
  	fill:'#fff',
  	padding:"2px 5px 0 10px",
  	[theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  shopText:{
	color:"#fff",
	fontSize:"12px"
  },
 shopLocation:{
 	color:"#000",
 	fontWeight:"bold"
 }
});

const Location = (props) => {
	const {classes}=props;
  return (
    <div className={classes.location}>
	    <i className={`material-icons ${classes.location}`}>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>								
	    </i>
	    <div className={classes.shopContent}>
	    <div className={classes.shopText}>You're shopping</div>
	    <div className={classes.shopLocation}>India-Bangalore</div>
	    </div>
    </div>
  )
}

export default withStyles(styles)(Location);