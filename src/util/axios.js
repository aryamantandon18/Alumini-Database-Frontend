import axios from 'axios';
import { getToken } from './auth';

const instance = axios.create({
    baseURL: 'https://alumnibackend.up.railway.app',
    timeout: 10000, // 10 seconds timeout
});

// request interceptor to include the token in headers
instance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;
