export default (state = { storeList: [] }, action) => {
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


