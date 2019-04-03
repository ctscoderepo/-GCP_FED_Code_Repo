import axios from "axios";
export default encodedImageSrc => async dispatch => {
	try {
		const res = await axios.post(
			"https://35.227.204.18/visionapi/searchImage",
			{
				requests: [
					{
						image: {
							content: encodedImageSrc
						},
						features: [
							{
								type: "LABEL_DETECTION"
							}
						]
					}
				]
			}
		);
		dispatch({ type: "SEARCHRESULTSAI", payload: res.data.products });
		return Promise.resolve(res);
	} catch (err) {
		return Promise.resolve();
	}
};
