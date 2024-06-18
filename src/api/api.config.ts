import axios from 'axios';

// Create an instance of Axios
export const appBackend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// Add a request interceptor
appBackend.interceptors.request.use(
  (config) => {
    // const token = 'your-auth-token';
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // Handle request error
    console.error('Request error: ', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
appBackend.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error: ', error?.response?.data?.message || error);
    return Promise.reject(error);
  }
);
