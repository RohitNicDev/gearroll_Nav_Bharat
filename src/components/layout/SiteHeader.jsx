import { useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Drawer, Collapse } from 'antd';
import { Menu, X, Phone, Mail, ChevronDown, Settings, Factory } from 'lucide-react';
import { mainNav } from '../../data/siteData';
import { useAppStore } from '../../store/useAppStore';
import { useResponsive } from '../../services/hooks/useResponsive';

function NavigationItem({ item }) {
  if (!item.children?.length) {
    return <NavLink to={item.path} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>{item.label}</NavLink>;
  }
  return (
    <div className="nav-item nav-item--dropdown">
      <NavLink to={item.path} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
        {item.label}<ChevronDown size={13} />
      </NavLink>
      <div className={`nav-dropdown ${item.label === 'Products' ? 'nav-dropdown--mega' : ''}`}>
        {item.children.map((child) => (
          <div className="nav-dropdown__group" key={child.path}>
            <Link className="nav-dropdown__title" to={child.path}>{child.label}</Link>
            {child.children?.map((nested) => <Link key={nested.path} to={nested.path} className="nav-dropdown__link">{nested.label}</Link>)}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileItem({ item }) {
  if (!item.children?.length) return <Link className="mobile-nav-link" to={item.path}>{item.label}</Link>;
  return (
    <Collapse ghost items={[{
      key: item.path,
      label: <Link to={item.path} className="mobile-nav-title">{item.label}</Link>,
      children: <div className="mobile-nav-children">{item.children.map((child) => <div key={child.path}>
        <Link to={child.path} className="mobile-nav-link">{child.label}</Link>
        {child.children?.map((nested) => <Link key={nested.path} to={nested.path} className="mobile-nav-link mobile-nav-link--nested">{nested.label}</Link>)}
      </div>)}</div>,
    }]} />
  );
}

export default function SiteHeader() {
  const { isMobile } = useResponsive();
  const { mobileMenuOpen, setMobileMenuOpen } = useAppStore();
  const location = useLocation();
  const mobileMenuItems = useMemo(() => mainNav.map((item) => ({ key: item.path, label: <MobileItem item={item} /> })), []);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Welcome To Nav Bharat Engineering Works</span>
          <div className="topbar__right">
            <a href="tel:+919873572889"><Phone size={13} /> +91-9873572889</a>
            <a href="mailto:sales@gearroll.com"><Mail size={13} /> sales@gearroll.com</a>
            <Link to="/blog/">Blog</Link>
            <Link to="/client.html">Clients</Link>
          </div>
        </div>
      </div>
      <div className="main-nav-wrap">
        <div className="container main-nav">
          <Link to="/" className="brand" aria-label="Nav Bharat Engineering Works home">
            <span className="brand__mark"><Factory size={30} strokeWidth={1.8} /></span>
            <span className="brand__text"><strong>GEARROLL</strong><small>NAV BHARAT ENGINEERING WORKS</small></span>
          </Link>
          {!isMobile ? (
            <nav className="desktop-nav" aria-label="Main navigation">{mainNav.map((item) => <NavigationItem key={item.path} item={item} />)}</nav>
          ) : (
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          )}
        </div>
      </div>
      <Drawer title={<Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}><span className="brand__mark"><Factory size={26} /></span><span className="brand__text"><strong>GEARROLL</strong><small>NAV BHARAT ENGINEERING WORKS</small></span></Link>} placement="right" width={340} open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} closeIcon={<X size={19} />}>
        <div className="mobile-nav-list" onClick={(event) => { if (event.target.closest('a')) setMobileMenuOpen(false); }}>
          {mainNav.map((item) => <MobileItem key={`${location.pathname}-${item.path}`} item={item} />)}
        </div>
      </Drawer>
    </header>
  );
}
