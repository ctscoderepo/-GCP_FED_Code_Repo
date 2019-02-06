import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import './Navigation.css';

const styles = theme => ({
	NavigationMenu:{
		width:'100%'
	}
})

function NavigationMenu(props) {
	const {classes}=props;
  const NavBar=[{category:'Electronics', url:'/shopping/Electronics'},
  {category:'Toys',url:'/shopping/Toys'},{category:'Lowels',url:'/shopping/Lowels'}]
  .map(item => <li key={item.category}><Link to={item.url}>{item.category}</Link></li>)
  return (
        <div className={classes.NavigationMenu}>
	        <ul className='NavigationMenu-nav-bar'>
	         {NavBar}
	        </ul>
        </div>
  );
}


export default withStyles(styles)(NavigationMenu);

