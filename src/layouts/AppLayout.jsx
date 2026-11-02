import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { trackPageView } from '../services/firebase';
import FloatingCallButton from '../components/common/FloatingCallButton';
import CommonModal from '../components/common/CommonModal';
import ConfirmationBox from '../components/common/ConfirmationBox';

export default function AppLayout() {
  const location = useLocation();
  const lastTrackedPath = useRef('');
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [location.pathname]);
  useEffect(() => {
    if (lastTrackedPath.current === location.pathname) return;
    lastTrackedPath.current = location.pathname;
    void trackPageView(location.pathname);
  }, [location.pathname]);
  return <><ScrollRestoration /><Outlet /><FloatingCallButton /><CommonModal /><ConfirmationBox /></>;
}
