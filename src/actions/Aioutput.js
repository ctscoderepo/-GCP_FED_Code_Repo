import axios from "axios";
export default encodedImageSrc => async dispatch => {
	const imgSrc = encodedImageSrc.replace("data:image/png;base64,", "");
	try {
		const res = await axios.post(
			"http://35.222.15.56/visionapi/searchImage",
			{
				requests: [
					{
						image: {
							content: imgSrc
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
		dispatch({
			type: "SEARCHRESULTSAI",
			payload: res.data.products.products
		});
		return Promise.resolve(res);
	} catch (err) {
		return Promise.resolve();
	}
};
