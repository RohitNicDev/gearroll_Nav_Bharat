export const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 20_000,
};

export const queryKeys = {
  all: ['gearroll'],
  posts: () => ['gearroll', 'posts'],
  post: (slug) => ['gearroll', 'post', slug],
  products: () => ['gearroll', 'products'],
};
