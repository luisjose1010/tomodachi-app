import axios from 'axios';
import * as localApi from '@/api/localApi';

const baseURL = import.meta.env.VITE_API_HOST + import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localApi.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localApi.clearToken();
    }
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);
