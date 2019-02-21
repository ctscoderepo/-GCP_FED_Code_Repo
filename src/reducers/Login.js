export default (state = { user: null }, action) => {
  switch (action.payload) {
    case "LOGIN":
      return { ...state, user: action.payload.userDetails };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};
