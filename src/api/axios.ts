import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:7001",
    timeout: 1000,
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });