import axios from 'axios';
import { apiConfig } from '../../masters/serviceMaster';

export const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  headers: { Accept: 'application/json' },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error?.message || 'Request failed';
    return Promise.reject(new Error(message));
  },
);
