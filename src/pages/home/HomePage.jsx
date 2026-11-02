import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Cog, Factory, Globe2, ShieldCheck, Users, Wrench } from 'lucide-react';
import { Button } from 'antd';
import SectionHeading from '../../components/common/SectionHeading';
import ProductGrid from '../../components/products/ProductGrid';
import EnquiryForm from '../../components/forms/EnquiryForm';
import { blogPosts, cncFacilities, companyPages, homeStats, images, processSteps, productPages, testimonials } from '../../data/siteData';

const slides = [
  { top: 'Rolling Excellence', title: 'Since 1986', text: 'In our endeavour of excellence we have become well versed with best industry practices and maintain stringent quality standards.', image: images.hero, action: '/about.html' },
  { top: 'Innovative', title: 'Business Solution', text: 'We believe in becoming an active participant in an ever evolving steel industry, exploring every possibility of innovation and excellence.', image: images.gearbox, action: '/customized-solution.html' },
  { top: 'Sustainable', title: 'growth for all', text: 'Nav Bharat Engineering Works is actively engaged in Corporate Social Responsibility programs supported by experienced professionals.', image: images.why2, action: '/existence.html' },
  { top: 'Behind', title: 'The Excellence', text: 'In our endeavour of excellence we have become well versed with best industry practices and maintain stringent quality standards.', image: images.gearGrinder, action: '/infrastructure.html' },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];
  return (
    <div className="home-page">
      <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(2,22,36,.86), rgba(2,22,36,.26)), url("${slide.image}")` }}>
        <div className="container home-hero__inner">
          <div className="home-hero__copy" key={activeSlide}>
            <span className="hero-kicker">{slide.top}</span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="home-hero__actions"><Button type="primary" href={slide.action} className="site-button site-button--orange">Discover More <ArrowRight size={15} /></Button><Button href="/enquiry.html" className="site-button site-button--ghost">Enquire Now</Button></div>
          </div>
          <div className="home-hero__controls">
            <button aria-label="Previous slide" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)}><ChevronLeft /></button>
            <div className="hero-dots">{slides.map((item, index) => <button key={item.title} aria-label={`Go to slide ${index + 1}`} className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} />)}</div>
            <button aria-label="Next slide" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}><ChevronRight /></button>
          </div>
          <div className="home-hero__year"><strong>40+</strong><span>Years of<br />Experience</span></div>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <div className="about-intro__media"><img src={images.about} alt="Engineering design and gear drawing" /><div className="experience-badge"><strong>40+</strong><span>Years of Experience</span></div></div>
          <div className="about-intro__content">
            <div className="section-eyebrow">Nav Bharat Engineering Works</div>
            <h2>We Believe In <span>Rolling Excellence</span></h2>
            <p className="intro-quote">“The only way to discover the limits of the possible is to go beyond them into the impossible.”</p>
            <p>The name “Nav Bharat” evokes hope for a new India and that is what our core philosophy is to build a marquee of excellence. We stand for quality, integrity, performance, perfection and character.</p>
            <div className="about-facts"><div><span className="fact-icon"><Factory size={22} /></span><div><strong>Our Existence</strong><p>Established in 1986</p></div></div><div><span className="fact-icon"><Cog size={22} /></span><div><strong>Gear Expertise</strong><p>Manufacturing since 1958</p></div></div></div>
            <Link to="/about.html" className="text-link text-link--large">Read Company Profile <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="stats-band"><div className="container stats-grid">{homeStats.map((item) => <div className="stat-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>

      <section className="section process-section"><div className="container"><SectionHeading eyebrow="Our Expertise" title="Manufacturing at its Best" subtitle="From planning and design to manufacturing and commissioning, we work with you at every stage." /><div className="process-grid">{processSteps.map((step) => <article className="process-card" key={step.title}><div className="process-card__image"><img src={step.image} alt={step.title} loading="lazy" /><span>{step.letter}</span></div><div className="process-card__body"><h3>{step.title}</h3><p>{step.text}</p><Link to="/about.html" className="text-link">Read More <ArrowRight size={14} /></Link></div></article>)}</div></div></section>

      <section className="section cnc-section"><div className="container"><div className="split-heading"><div><div className="section-eyebrow">Precision Manufacturing</div><h2>Explore Our CNC Facilities</h2></div><Link to="/infrastructure.html" className="text-link text-link--large">View Infrastructure <ArrowRight size={16} /></Link></div><div className="cnc-grid">{cncFacilities.map((facility, index) => <article className="cnc-card" key={facility.title}><img src={facility.image} alt={facility.title} loading="lazy" /><div className="cnc-card__overlay"><span>0{index + 1}</span><h3>{facility.title}</h3></div></article>)}</div></div></section>

      <section className="section products-section"><div className="container"><SectionHeading eyebrow="Engineering Solutions" title="Our Product Range" subtitle="Rolling mill plants, industrial gearboxes and precision engineering solutions." /><ProductGrid products={productPages.slice(0, 9)} /><div className="centered-action"><Button href="/hot-rolling-mill.html" type="primary" className="site-button site-button--primary">Explore All Products <ArrowRight size={15} /></Button></div></div></section>

      <section className="section story-section"><div className="container story-grid"><article className="story-card story-card--wide"><img src={images.about} alt="Our Existence" loading="lazy"/><div className="story-card__copy"><div className="section-eyebrow">Our Journey</div><h2>Our Existence</h2><p>Nav Bharat Engineering Works has been a contributor to the steel industry since 1986, building strong relationships with customers in India and abroad.</p><Link to="/existence.html" className="text-link">More Details <ArrowRight size={15} /></Link></div></article><article className="story-card"><img src={images.why1} alt="Infrastructure" loading="lazy"/><div className="story-card__copy"><div className="section-eyebrow">Quality & Technology</div><h2>Infrastructure</h2><p>Comprehensive rolling mill capabilities supported by research, manufacturing and quality checks.</p><Link to="/infrastructure.html" className="text-link">More Details <ArrowRight size={15} /></Link></div></article><article className="story-card story-card--dark"><img src={images.why2} alt="Sustainable development" loading="lazy"/><div className="story-card__copy"><div className="section-eyebrow">Responsibility</div><h2>Sustainable development and growth for all</h2><p>Supporting community initiatives, healthcare and tree plantation programs.</p><Link to="/existence.html" className="text-link">More Details <ArrowRight size={15} /></Link></div></article></div></section>

      <section className="quality-cta" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,34,54,.92), rgba(5,34,54,.65)), url("${images.hero}")` }}><div className="container quality-cta__inner"><div><span className="section-eyebrow">Produce the Best</span><h2>Satisfaction is Our Motto</h2><p>“We believe it is more economical to make good quality products than to make a bad quality product and provide field service.”</p></div><Button href="/contact.html" className="site-button site-button--orange">Contact Us <ArrowRight size={15} /></Button></div></section>

      <section className="section testimonials-section"><div className="container"><SectionHeading eyebrow="Testimonials" title="People Says About Nav Bharat Engineering" subtitle="Our commitment to quality is reflected in long-term customer relationships." /><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><div className="testimonial-card__quote">“</div><p>{item.quote}</p><div className="testimonial-card__person"><span className="testimonial-avatar">{item.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span><div><strong>{item.name}</strong><small>{item.location}</small></div></div></article>)}</div></div></section>

      <section className="section clients-section"><div className="container"><SectionHeading eyebrow="Trusted Relationships" title="Our Clients" /><div className="client-logo-grid">{images.clientLogos.map((src, index) => <div className="client-logo" key={src}><img src={src} alt={`Nav Bharat client ${index + 1}`} loading="lazy" /></div>)}</div><div className="centered-action"><Link to="/client.html" className="text-link text-link--large">View All Clients <ArrowRight size={16} /></Link></div></div></section>

      <section className="section news-section"><div className="container"><div className="split-heading"><div><div className="section-eyebrow">News & Updates</div><h2>Recent Updates</h2></div><Link to="/blog/" className="text-link text-link--large">View All Posts <ArrowRight size={16} /></Link></div><div className="news-grid">{blogPosts.slice(0, 3).map((post) => <article className="news-card" key={post.path}><Link to={post.path} className="news-card__image"><img src={post.image} alt={post.title} loading="lazy" /></Link><div className="news-card__body"><div className="news-card__date">{post.date}</div><h3><Link to={post.path}>{post.title}</Link></h3><p>{post.excerpt}</p><Link to={post.path} className="text-link">Read More <ArrowRight size={14} /></Link></div></article>)}</div></div></section>

      <section className="section home-enquiry"><div className="container home-enquiry__grid"><div className="home-enquiry__content"><div className="section-eyebrow">Get In Touch</div><h2>Let's Discuss Your Project</h2><p>Connect with our team for rolling mill plants, gearboxes, gear grinding and customized engineering solutions.</p><div className="home-enquiry__points"><span><CheckCircle2 size={17} /> Requirement-led engineering</span><span><CheckCircle2 size={17} /> Manufacturing and commissioning</span><span><CheckCircle2 size={17} /> Domestic and international customers</span></div></div><div className="home-enquiry__form"><h3>Send an Enquiry</h3><EnquiryForm compact /></div></div></section>
    </div>
  );
}
