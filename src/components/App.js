import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import routes from '../routes';
import Header from './Header';

export default ()=>(
<BrowserRouter>
<>
<Header/>
<Switch>
{routes.map(route=> <Route path={route.path} component={route.component} key={route.id} exact={route.exact && true}/>)}
</Switch>
</>
</BrowserRouter>
	)