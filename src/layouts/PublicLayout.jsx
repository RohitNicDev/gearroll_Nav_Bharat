import { Outlet } from 'react-router-dom';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';

export default function PublicLayout() {
  return <div className="public-layout"><SiteHeader /><main><Outlet /></main><SiteFooter /></div>;
}
