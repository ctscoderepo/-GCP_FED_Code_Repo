import { get, post } from "./BaseApi";

export const searchResults = type => async dispatch => {
  const res = await get(`http://104.154.92.99/keywordsearch?keyword=${type}`);
  dispatch({ type: "SEARCHRESULTS", payload: res.data });
};

export const visionApi = encodedImageSrc => async dispatch => {
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
            type: "LABEL_DETECTION"
          }
        ]
      }
    ]
  };

  {
    /*const requestBody = {
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
  };*/
  }
  const res = await post(`http://35.193.72.20/searchImage`, requestBody);
  console.log("res.data: ", res.data);
  dispatch({ type: "SEARCHRESULTS1", payload: res.data });
};
