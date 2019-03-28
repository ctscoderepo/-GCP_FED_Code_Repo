import { get } from "./BaseApi";
import { URLList } from "../config/URLs";

export const searchResults = type => async dispatch => {
  dispatch({ type: "ISLOADING" });
  let url = URLList.getSearchURL() + type;
  const res = await get(url);
  dispatch({ type: "SEARCHRESULTS", payload: res.data });
};
