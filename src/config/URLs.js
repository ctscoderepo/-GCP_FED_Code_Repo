export const URLList = {
  HTTP: "http://",
  HTTPS: "https://",
  Search_IP_Old: "104.154.92.99",
  Search_IP: "35.227.204.18",
  Cart_IP_Old: "35.202.122.135",
  CartAndCheckout_IP_New: "35.244.194.33",
  Checkout_IP_Old: "35.202.122.135",
  LoginAndRegistration_IP_Old: "104.198.155.47",
  LoginAndRegistration_IP_New: "35.244.194.33",
  StoreFinder_IP_Old: "104.154.36.71",
  StoreFinder_IP_New: "35.244.194.33",
  VisionApi_IP_NEW: "35.227.204.18",
  ShoppingCartAPI: "/cart/shoppingcart/",
  SearchAPI: "/keywordsearch?keyword=",
  ProdcutDetailsAPI: "/products/",
  ProdcutsAPI: "/search?category1=",
  OrderAPI: "/cart/order/",
  LoginAPI: "/register/login-service/",
  RegistrationAPI: "/register/register-user/user",
  VisionApi: "/visionapi/searchImage",
  getStoreFinderUsingLatLng: function(lat, lng) {
    return (
      this.HTTP +
      this.StoreFinder_IP_New +
      "/storelocator/getstoresforlatlong?lat=" +
      lat +
      "&lng=" +
      lng
    );
  },
  getStoreFinderUsingAddress: function(zip, radius) {
    return (
      this.HTTP +
      this.StoreFinder_IP_New +
      "/storelocator/getstoredetails?address=" +
      zip +
      "&radius=" +
      radius
    );
  },
  getHttpsStoreFinderUsingLatLng: function(lat, lng) {
    return (
      this.HTTPS +
      this.StoreFinder_IP_New +
      "/storelocator/getstoresforlatlong?lat=" +
      lat +
      "&lng=" +
      lng
    );
  },
  getHttpsStoreFinderUsingAddress: function(zip, radius) {
    return (
      this.HTTPS +
      this.StoreFinder_IP_New +
      "/storelocator/getstoredetails?address=" +
      zip +
      "&radius=" +
      radius
    );
  },
  getSearchURL: function() {
    return this.HTTPS + this.Search_IP + this.SearchAPI;
  },
  getProductsURL: function() {
    return this.HTTPS + this.Search_IP + this.ProdcutsAPI;
  },
  getProductDetailsURL: function() {
    return this.HTTPS + this.Search_IP + this.ProdcutDetailsAPI;
    //`http://104.154.92.99/products/${item}`
  },
  getAddToCartURL: function() {
    return (
      this.HTTPS + this.CartAndCheckout_IP_New + this.ShoppingCartAPI + "add"
    );
  },
  getUpdateCartURL: function() {
    return (
      this.HTTPS + this.CartAndCheckout_IP_New + this.ShoppingCartAPI + "update"
    );
  },
  getDeleteCartURL: function() {
    return (
      this.HTTPS +
      this.CartAndCheckout_IP_New +
      this.ShoppingCartAPI +
      "delete/"
    );
  },
  getCart: function() {
    return this.HTTPS + this.CartAndCheckout_IP_New + this.OrderAPI;
  },
  getCheckoutURL: function() {
    return (
      this.HTTPS +
      this.CartAndCheckout_IP_New +
      this.ShoppingCartAPI +
      "checkout"
    );
  },
  getRegistrationURL: function() {
    return this.HTTPS + this.LoginAndRegistration_IP_New + this.RegistrationAPI;
  },
  getLoginURL: function() {
    return this.HTTPS + this.LoginAndRegistration_IP_New + this.LoginAPI;
  },
  getVisionApiURL: function() {
    return this.HTTPS + this.VisionApi_IP_NEW + this.VisionApi;
  }
};
