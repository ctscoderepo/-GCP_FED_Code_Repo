import axios from "axios";
export default encodedImageSrc => async dispatch => {
     dispatch({type:"ISLOADING"});
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
    dispatch({ type: "SEARCHRESULTSAI", payload: res.data.products.products });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve();
  }
};
