import Home from "../containers/Home";
import Products from "../containers/Products";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Cart from "../containers/Cart";
import PLP from "../containers/Plp";
import Checkout from "../containers/Checkout";
import Search from "../containers/Search";

export default [
  { path: "/", component: Home, exact: true, id: 1 },
  { path: "/shopping/:category", component: Products, exact: true, id: 2 },
  {
    path: "/shopping/:category/:subCategory",
    component: Products,
    exact: true,
    id: 3
  },
  { path: "/login", component: Login, id: 4 },
  { path: "/register", component: Register, id: 5 },
  { path: "/cart", component: Cart, id: 6 },
  { path: "/store/product/:item", component: PLP, id: 7 },
  { path: "/checkout", component: Checkout, id: 8 },
  { path: "/search", component: Search, id: 9 }
];
