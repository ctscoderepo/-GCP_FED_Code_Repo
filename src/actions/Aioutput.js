import axios from "axios";
export default encodedImageSrc => async dispatch => {
  const requestBody = {
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
  };
  try {
    const res = await axios.post(
      "https://35.227.204.18/visionapi/searchImage",
      requestBody
    );
    // alert(res.data.products);
    dispatch({ type: "SEARCHRESULTSAI", payload: res.data.products });
    return Promise.resolve(res.data.products);
  } catch (err) {
    return Promise.resolve();
  }
};
