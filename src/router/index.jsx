import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import PublicLayout from '../layouts/PublicLayout';
import { companyPages, productPages } from '../data/siteData';

const HomePage = lazy(() => import('../pages/home/HomePage.jsx'));
const CompanyPage = lazy(() => import('../pages/company/CompanyPage.jsx'));
const ProductDetailPage = lazy(() => import('../pages/products/ProductDetailPage.jsx'));
const BlogListPage = lazy(() => import('../pages/blog/BlogListPage.jsx'));
const BlogDetailPage = lazy(() => import('../pages/blog/BlogDetailPage.jsx'));
const GenericContentPage = lazy(() => import('../pages/marketing/GenericContentPage.jsx'));
const EnquiryPage = lazy(() => import('../pages/marketing/EnquiryPage.jsx'));

const companyPaths = Object.keys(companyPages).filter((path) => !['/enquiry.html', '/catalogue.html'].includes(path));
const productRoutes = productPages.map((product) => ({
  path: product.path.replace(/^\//, ''),
  element: <ProductDetailPage product={product} />,
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <HomePage /> },
          ...companyPaths.map((path) => ({ path: path.replace(/^\//, ''), element: <CompanyPage /> })),
          { path: 'enquiry.html', element: <EnquiryPage /> },
          { path: 'catalogue.html', element: <GenericContentPage /> },
          ...productRoutes,
          { path: 'blog', children: [
            { index: true, element: <BlogListPage /> },
            { path: ':slug', element: <BlogDetailPage /> },
          ] },
          { path: '*', element: <GenericContentPage /> },
        ],
      },
    ],
  },
]);
