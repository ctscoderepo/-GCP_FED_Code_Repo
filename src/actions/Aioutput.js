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
		const res = await axios.post('https://35.244.225.58/visionapi/searchImage', requestBody);
		dispatch({ type: 'AIRESULTS', payload: res.data });
		return Promise.resolve();
	} catch (err) {
		return Promise.resolve();
	}
};
