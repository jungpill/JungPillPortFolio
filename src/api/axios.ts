import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://jungpillportfolio-bxc4hncjgcd9b9ha.japaneast-01.azurewebsites.net/",
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });