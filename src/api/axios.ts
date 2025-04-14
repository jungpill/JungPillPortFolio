import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://13.60.58.2:8080",
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });