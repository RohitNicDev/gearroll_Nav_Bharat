export const slugToTitle = (slug = '') => decodeURIComponent(slug)
  .replace(/\.(html|htm)$/i, '')
  .replace(/^\/+|\/+$/g, '')
  .replace(/[-_]+/g, ' ')
  .replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Home';

export const stripHtmlExtension = (pathname = '/') => pathname.replace(/\.html?$/i, '').replace(/\/$/, '') || '/';

export const toTitleCase = (text = '') => text.replace(/\b\w/g, (letter) => letter.toUpperCase());
