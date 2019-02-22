export default (state = { user: null }, action) => {
  switch (action.payload) {
    case "REGISTRATION":
      return { ...state, user: action.payload.userDetails };    
    default:
      return state;
  }
};
