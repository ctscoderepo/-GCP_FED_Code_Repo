import axios from "axios";
import { URLList } from "../config/URLs";
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
    alert("encodedImageSrc: ", encodedImageSrc);
    alert(URLList.getVisionApiURL() + "    " + requestBody);
    const res = await axios.post(URLList.getVisionApiURL(), requestBody);
    alert("data: ", res.data.products);
    dispatch({ type: "SEARCHRESULTSAI", payload: res.data.products });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve();
  }
};
