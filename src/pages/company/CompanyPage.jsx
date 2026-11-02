import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import EnquiryForm from '../../components/forms/EnquiryForm';
import { companyPages, images, processSteps } from '../../data/siteData';

export default function CompanyPage() {
  const location = useLocation();
  const data = companyPages[location.pathname] || companyPages['/about.html'];
  const isClientPage = location.pathname === '/client.html';
  const isContact = location.pathname === '/contact.html';
  return (
    <div className="content-page company-page">
      <PageHero title={data.title} subtitle={data.subtitle} />
      <section className="section"><div className={`container company-content-grid ${isClientPage ? 'company-content-grid--single' : ''}`}>
        {data.image && <div className="company-content__image"><img src={data.image} alt={data.title} />{!isClientPage && <div className="experience-badge"><strong>40+</strong><span>Years of Experience</span></div>}</div>}
        <div className="company-content__body"><div className="section-eyebrow">Nav Bharat Engineering Works</div><h2>{data.subtitle || data.title}</h2>
          {data.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {data.sections?.map((section) => <div className="company-section-item" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>)}
          {data.bullets?.length > 0 && <ul className="check-list">{data.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={17} />{bullet}</li>)}</ul>}
          {location.pathname === '/vision-mission.html' && <div className="vision-image"><img src={images.missionVision} alt="Mission, vision and quality" /></div>}
          {isContact && <div className="contact-cards"><article><span><Globe2 size={19} /></span><h3>Unit-1</h3><p>C-233, B.S. Road Industrial Area, Site-1, Ghaziabad, U.P, India</p><a href="tel:+919873572889">+91-9873572889</a></article><article><span><Globe2 size={19} /></span><h3>Unit-2</h3><p>C-175, B.S. Road, Industrial Area, Site-1, Ghaziabad, U.P, India</p><a href="mailto:sales@gearroll.com">sales@gearroll.com</a></article><article><span><Globe2 size={19} /></span><h3>Unit-3</h3><p>C-243, B.S. Road, Industrial Area, Site-1, Ghaziabad, U.P, India</p><a href="mailto:gears@gearroll.com">gears@gearroll.com</a></article></div>}
          {isClientPage && <div className="client-logo-grid client-logo-grid--page">{images.clientLogos.map((src, index) => <div className="client-logo" key={src}><img src={src} alt={`Nav Bharat client ${index + 1}`} loading="lazy" /></div>)}</div>}
          {isContact && <div className="company-enquiry-box"><h3>Send a Message</h3><p>Feel free to say hello or send your questions.</p><EnquiryForm /></div>}
        </div>
      </div></section>
      {!isClientPage && !isContact && location.pathname !== '/vision-mission.html' && <section className="section manufacturing-section"><div className="container"><SectionHeading eyebrow="Our Approach" title="Manufacturing at its Best" /><div className="process-grid">{processSteps.map((step) => <article key={step.title} className="process-card"><div className="process-card__image"><img src={step.image} alt={step.title} loading="lazy" /><span>{step.letter}</span></div><div className="process-card__body"><h3>{step.title}</h3><p>{step.text}</p><Link className="text-link" to="/enquiry.html">Read More <ArrowRight size={14} /></Link></div></article>)}</div></div></section>}
      {!isContact && <section className="global-presence-section"><div className="container"><SectionHeading eyebrow="Serving Customers Worldwide" title="Our Global Presence" light /><div className="global-presence-grid">{['Europe', 'Africa', 'Nigeria', 'Ghana', 'Turkey', 'Indonesia', 'Nepal', 'Sri Lanka', 'Bangladesh'].map((region) => <div className="global-region" key={region}><Globe2 size={20} /><span>{region}</span></div>)}</div></div></section>}
    </div>
  );
}
