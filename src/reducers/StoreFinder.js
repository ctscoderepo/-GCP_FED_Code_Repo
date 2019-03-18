export default (state = { storeList: [] }, action) => {
  console.log("Store reducer",action.payload);
switch (action.type) {
  case "FINDSTORES":
    return {
      ...state,
      storeList: [...action.payload]
    };
  case "GETSTORESBYLATLNG":
    return {...state, storeList: [...action.payload]};
  default:
    return state;
}
};


