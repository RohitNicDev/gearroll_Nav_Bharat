import { apiClient } from './client';

const requireApiBase = () => {
  if (!import.meta.env.VITE_API_BASE_URL) {
    throw new Error('Enquiry API is not configured. Set VITE_API_BASE_URL in .env before enabling form submission.');
  }
};

export const commonApi = {
  get: async (url, config) => (await apiClient.get(url, config)).data,
  post: async (url, payload, config) => {
    requireApiBase();
    return (await apiClient.post(url, payload, config)).data;
  },
  put: async (url, payload, config) => (await apiClient.put(url, payload, config)).data,
  delete: async (url, config) => (await apiClient.delete(url, config)).data,
};
