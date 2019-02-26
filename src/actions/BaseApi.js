import Axios from 'axios';

export const get = (url, params) => {
    return Axios.get(url)
        .then(resp => {
            return resp;
        },
            err => {
                console.error("Error from GET call of ", url);
            })
}

export const post = (url, postData) => {
    console.log(postData)
    return Axios.post(url,  postData)
        .then(resp => {
            return resp;
            },
            err => {
                console.error("Error from POST call of ", url);
            })
}

function getHeadersPost() {
    return {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Allow-Credentials": false
    };
}