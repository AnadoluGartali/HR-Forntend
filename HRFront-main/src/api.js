import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Adjust the baseURL according to your backend setup
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        const username = 'admin'; // or 'user'
        const password = '12345'; // or 'password'

        const base64Credentials = btoa(`${username}:${password}`);
        config.headers['Authorization'] = `Basic ${base64Credentials}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;