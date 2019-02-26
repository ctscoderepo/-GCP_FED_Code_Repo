import {post} from './BaseApi';

export const registration = userDetails => dispatch => { 
	return post("http://104.198.155.47/api/register-user", { userDetails })
		.then(res => dispatch({ TYPE: "REGISTRATION", payload: res.data }))
		.catch(err => err);
};
