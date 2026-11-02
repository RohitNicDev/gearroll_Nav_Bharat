import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Button } from 'antd';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import ProductGrid from '../../components/products/ProductGrid';
import EnquiryForm from '../../components/forms/EnquiryForm';
import { productPages } from '../../data/siteData';

export default function ProductDetailPage({ product }) {
  if (!product) return null;
  const related = productPages.filter((item) => item.path !== product.path).slice(0, 3);
  return (
    <div className="content-page product-detail-page">
      <PageHero title={product.title} subtitle={product.eyebrow} />
      <section className="section"><div className="container product-detail-grid">
        <div className="product-detail__main"><div className="product-detail__image"><img src={product.image} alt={product.title} /></div><div className="section-eyebrow">{product.eyebrow || 'Our Product'}</div><h2>{product.title}</h2>{product.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {product.bullets?.length > 0 && <><h3>Key Features</h3><ul className="check-list">{product.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={17} />{bullet}</li>)}</ul></>}
          <div className="inline-callout"><div><h3>Need a solution for your plant?</h3><p>Share your operating requirements with our engineering team.</p></div><Button href="/enquiry.html" type="primary" className="site-button site-button--orange">Enquire Now <ArrowRight size={15} /></Button></div>
        </div>
        <aside className="product-sidebar"><div className="sidebar-panel"><h3>Product Range</h3>{productPages.map((item) => <Link key={item.path} to={item.path} className={item.path === product.path ? 'active' : ''}>{item.title}<ArrowRight size={14} /></Link>)}</div><div className="sidebar-contact"><div className="sidebar-contact__icon"><Phone size={23} /></div><h3>Have a Question?</h3><p>Contact our team for additional details and project enquiries.</p><a href="tel:+919873572889">+91-9873572889</a><Button href="/contact.html" className="site-button site-button--orange">Contact Us</Button></div></aside>
      </div></section>
      <section className="section related-products"><div className="container"><SectionHeading eyebrow="Explore More" title="Related Products" /><ProductGrid products={related} /></div></section>
      <section className="section product-enquiry-section"><div className="container product-enquiry-grid"><div><SectionHeading eyebrow="Send an Enquiry" title="Let's Talk About Your Requirement" center={false} /><p>Complete the enquiry form and the Nav Bharat Engineering Works team will be in touch.</p></div><EnquiryForm /></div></section>
    </div>
  );
}
