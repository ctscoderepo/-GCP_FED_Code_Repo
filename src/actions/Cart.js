import {post} from './BaseApi';

export const addToCart = item => async dispatch => {
  const res = await post("");
  dispatch({ TYPE: "ADDTOCART", apyload: res.data });
};
