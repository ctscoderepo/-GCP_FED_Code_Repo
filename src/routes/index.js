import Home from '../containers/Home';
import Category from '../containers/Category';
import Products from '../containers/Products';
import ProductDetail from '../containers/ProductDetail';

export default [
{path:'/',component:Home, id:'1', exact:true},
{path:'/shopping/:category',component:Category, id:'2', exact:true},
{path:'/shopping/:category/:type',component:Products, id:'2', exact:true},
{path:'/shopping/:category/:type/:id',component:ProductDetail, id:'2', exact:true}
]