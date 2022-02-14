import axios from 'axios';
// import config from "../config";


// const baseURL = config().secrets.apiHost;




export const login = async (data) => {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data, {
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
          },
    });
    return response;
};