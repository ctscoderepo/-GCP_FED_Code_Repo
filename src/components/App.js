import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import routes from '../routes';

export default ()=>(
<BrowserRouter>
<Switch>
{routes.map(route=> <Route path='/' component={route.component} key={route.id}/>)}
</Switch>
</BrowserRouter>
	)