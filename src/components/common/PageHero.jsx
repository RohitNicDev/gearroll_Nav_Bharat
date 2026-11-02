import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, House } from 'lucide-react';
import { slugToTitle } from '../../masters/utilityMaster';

export default function PageHero({ title, subtitle }) {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);
  return (
    <section className="page-hero">
      <div className="page-hero__background" />
      <div className="container page-hero__inner">
        <div className="page-hero__eyebrow">Welcome To Nav Bharat Engineering Works</div>
        <h1>{title || slugToTitle(parts.at(-1) || 'Home')}</h1>
        {subtitle && <p>{subtitle}</p>}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/"><House size={14} /> Home</Link>
          {parts.length > 0 && <ChevronRight size={13} />}
          {parts.map((part, i) => {
            const path = `/${parts.slice(0, i + 1).join('/')}`;
            return <span key={path} className={i === parts.length - 1 ? 'current' : ''}>{i > 0 && <ChevronRight size={13} />} {slugToTitle(part)}</span>;
          })}
        </nav>
      </div>
    </section>
  );
}
