import axios from 'axios';

// const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Dynamically set the baseURL based on the current host
let baseURL = '';
if (typeof window !== 'undefined') {
  const { protocol, hostname, port } = window.location;
  baseURL = `${protocol}//${hostname}${port ? `:${port}` : ''}/app-backend`;
}

// Create an instance of Axios
export const appBackend = axios.create({
  baseURL,
});

// Add a request interceptor
appBackend.interceptors.request.use(
  (config) => {
    console.log(`Calling backend on: ${baseURL}`);
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
