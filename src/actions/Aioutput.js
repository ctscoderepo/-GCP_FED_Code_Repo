import axios from 'axios';
export default (encodedImageSrc) => async (dispatch) => {
	const requestBody = {
		requests: [
			{
				image: {
					source: {
						gcsImageUri: encodedImageSrc
					}
				},
				features: [
					{
						type: 'LABEL_DETECTION'
					}
				]
			}
		]
	};
	try {
		const res = await axios.post(`http://35.193.72.20/searchImage`, requestBody);
		dispatch({ type: 'AIRESULTS', payload: res.data });
		return Promise.resolve();
	} catch (err) {
		return Promise.resolve();
	}
};
