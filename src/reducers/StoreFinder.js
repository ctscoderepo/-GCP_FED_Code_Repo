export default (state = { storeList: [] }, action) => {
  console.log("Store reducer",action.payload);
switch (action.type) {
    case "ISLOADING":
    return{...state, isLoading:true}
  case "FINDSTORES":
    return {
      ...state,
      storeList: [...action.payload], isLoading:false
    };
  case "GETSTORESBYLATLNG":
    return {...state, storeList: [...action.payload], isLoading:false};
  default:
    return state;
}
};


