import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import EnquiryForm from '../../components/forms/EnquiryForm';
import ProductGrid from '../../components/products/ProductGrid';
import { images, productPages } from '../../data/siteData';
import { slugToTitle } from '../../masters/utilityMaster';

export default function GenericContentPage() {
  const location = useLocation();
  const title = slugToTitle(location.pathname.split('/').filter(Boolean).at(-1) || 'Page');
  const cleanTitle = title.replace(/ Html$/i, '');
  const related = productPages.filter((p) => /rolling|mill|gear|tmt|stand|cooling|shear/i.test(p.title)).slice(0, 6);
  const isGlobalLanding = /europe|africa|nigeria|ghana|turkey|indonesia|nepal|sri lanka|bangladesh|manufacturers|exporters|supplier/i.test(cleanTitle);
  return <div className="content-page generic-content-page"><PageHero title={cleanTitle} subtitle={isGlobalLanding ? 'Nav Bharat Engineering Works — Global Presence' : undefined} />
    <section className="section"><div className="container generic-page-grid"><div className="generic-page-main"><img className="generic-page-image" src={images.rollingMill} alt={cleanTitle} /><div className="section-eyebrow">Nav Bharat Engineering Works</div><h2>{cleanTitle}</h2>
      <p>Nav Bharat Engineering Works is an engineering company serving the rolling mill, steel processing and power-transmission industries. The company’s range includes rolling mill plants, industrial gearboxes, precision gear grinding and associated equipment.</p>
      {isGlobalLanding && <p>We work with customers across India and international markets. Project scope, product selection and engineering details are matched to the requirements of the application and plant.</p>}
      <p>Product selection depends on the process, required output, operating conditions and plant layout. Contact the team to discuss technical requirements and relevant product information.</p>
      <ul className="check-list"><li><CheckCircle2 size={17} /> Engineering-led planning and design</li><li><CheckCircle2 size={17} /> Product and equipment manufacturing</li><li><CheckCircle2 size={17} /> Quality checks and process coordination</li><li><CheckCircle2 size={17} /> Commissioning and customer support</li></ul>
      {isGlobalLanding && <div className="generic-global-links"><h3>Our Global Presence</h3>{['Europe', 'Africa', 'Nigeria', 'Ghana', 'Turkey', 'Indonesia', 'Nepal', 'Sri Lanka', 'Bangladesh'].map((region) => <Link key={region} to={`/top-10-rolling-mill-${region.toLowerCase().replace(/\s+/g, '-')}.html`}><Globe2 size={15} />{region}</Link>)}</div>}
      <div className="generic-page-cta"><h3>Looking for more information?</h3><p>Send your project details and our team will get in touch.</p><Link to="/enquiry.html" className="text-link">Send an Enquiry <ArrowRight size={15} /></Link></div>
    </div><aside className="product-sidebar"><div className="sidebar-panel"><h3>Product Range</h3>{productPages.slice(0, 12).map((item) => <Link key={item.path} to={item.path}>{item.title}<ArrowRight size={14} /></Link>)}</div><div className="sidebar-panel"><h3>Send an Enquiry</h3><EnquiryForm compact /></div></aside></div></section>
    <section className="section related-products"><div className="container"><SectionHeading eyebrow="Explore Our Expertise" title="Related Products" /><ProductGrid products={related} /></div></section>
  </div>;
}
