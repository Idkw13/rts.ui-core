import axios from 'axios';

const initAxiosConfig = () => ({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const Api = axios.create(initAxiosConfig());