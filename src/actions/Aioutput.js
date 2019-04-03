import axios from "axios";
export default encodedImageSrc => async dispatch => {
  const imgSrc = encodedImageSrc.replace("data:image/png;base64,", "");
  try {
    const res = await axios.post(
      "https://35.227.204.18/visionapi/searchImage",
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
    alert("AIoutput: ", res.data.products);
    dispatch({ type: "SEARCHRESULTS1", payload: res.data.products });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve();
  }
};
