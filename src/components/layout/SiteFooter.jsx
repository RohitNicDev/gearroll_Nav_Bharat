import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { mainNav, productPages, images } from '../../data/siteData';

export default function SiteFooter() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about.html' },
    { label: 'Our Existence', path: '/existence.html' },
    { label: 'Vision & Mission', path: '/vision-mission.html' },
    { label: "Director's Message", path: '/director-message.html' },
    { label: 'Blog', path: '/blog/' },
    { label: 'Contact Us', path: '/contact.html' },
    { label: 'Enquiry', path: '/enquiry.html' },
  ];
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-about">
            <Link to="/" className="brand brand--footer"><span className="brand__mark"><span className="brand__mark-text">NB</span></span><span className="brand__text"><strong>GEARROLL</strong><small>NAV BHARAT ENGINEERING WORKS</small></span></Link>
            <p>Nav Bharat Engineering Works came into existence in 1986 and has been a major contributor to the gears and steel industry, serving customers in India and abroad.</p>
            <Link to="/about.html" className="footer-more">More About Us <ArrowRight size={15} /></Link>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            {quickLinks.map((item) => <Link key={item.path} to={item.path}><ChevronRight size={13} />{item.label}</Link>)}
          </div>
          <div className="footer-links footer-product-links">
            <h3>Product Range</h3>
            {productPages.slice(0, 9).map((item) => <Link key={item.path} to={item.path}><ChevronRight size={13} />{item.title}</Link>)}
            <Link to="/rolling-mill-stand.html"><ChevronRight size={13} />Rolling Mill Stand</Link>
            <Link to="/tmt-bars-rolling-mill.html"><ChevronRight size={13} />TMT Bars Rolling Mill</Link>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><MapPin size={18} /> Unit-1 - C-233, B.S. Road Industrial Area, Site-1, Ghaziabad, U.P, India</p>
            <a href="tel:+919873572889"><Phone size={16} /> +91-9873572889</a>
            <a href="mailto:sales@gearroll.com"><Mail size={16} /> sales@gearroll.com</a>
            <a href="mailto:gears@gearroll.com"><Mail size={16} /> gears@gearroll.com</a>
            <div className="footer-mini-map"><span>Ghaziabad, Uttar Pradesh</span><a href="https://maps.google.com/?q=C-233+B.S.+Road+Industrial+Area+Ghaziabad" target="_blank" rel="noreferrer">View Map <ArrowRight size={13} /></a></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="container footer-bottom__inner"><span>Copyright © 2026 Nav Bharat Engineering Works | All rights reserved.</span><span>Powered by : Keyword India Network Private Limited.</span></div></div>
      <a className="footer-call" href="tel:+919873572889" aria-label="Call Nav Bharat Engineering"><Phone size={18} /></a>
    </footer>
  );
}
