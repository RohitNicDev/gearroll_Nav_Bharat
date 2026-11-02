import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';

function LoadingFallback() {
  return <div className="loading-page"><span className="loading-spinner" />Loading page…</div>;
}

export default function App() {
  return <Suspense fallback={<LoadingFallback />}><RouterProvider router={router} /></Suspense>;
}
