import axios from "axios";
import { URLList } from "../config/URLs";
export default encodedImageSrc => async dispatch => {
  alert("HI");
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
    console.log(URLList.getVisionApiURL());
    const res = await axios.post(URLList.getVisionApiURL(), requestBody);
    alert("data: ", res.data.products);
    dispatch({ type: "SEARCHRESULTSAI", payload: res.data.products });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve();
  }
};
