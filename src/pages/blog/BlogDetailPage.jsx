import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, CalendarDays, ChevronRight } from 'lucide-react';
import PageHero from '../../components/common/PageHero';
import EnquiryForm from '../../components/forms/EnquiryForm';
import { blogPosts, images } from '../../data/siteData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const location = useLocation();
  const path = `/blog/${slug}/`;
  const post = blogPosts.find((item) => item.path.replace(/\/$/, '') === path.replace(/\/$/, '') || item.path === location.pathname) || blogPosts[0];
  const recentPosts = blogPosts.filter((item) => item.path !== post.path).slice(0, 5);
  return (
    <div className="content-page blog-detail-page"><PageHero title={post.title} subtitle="Blog & Updates" />
      <section className="section"><div className="container blog-detail-grid">
        <article className="blog-article"><img className="blog-article__image" src={post.image} alt={post.title} /><div className="blog-article__meta"><CalendarDays size={15} /> {post.date} <span>•</span> Nav Bharat Engineering Works</div><h1>{post.title}</h1><p className="blog-article__lead">{post.excerpt}</p>
          {post.sections?.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}
          {post.faqs?.length > 0 && <section className="blog-faq"><h2>FAQs</h2>{post.faqs.map(([question, answer]) => <div className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></div>)}</section>}
          <div className="blog-article__cta"><h3>Discuss your project with our team</h3><p>Contact us for rolling mill, gearbox and precision engineering requirements.</p><Link to="/enquiry.html" className="text-link">Enquire Now <ArrowRight size={15} /></Link></div>
        </article>
        <aside className="blog-sidebar"><div className="sidebar-panel"><h3>Recent Post</h3>{recentPosts.map((item) => <Link key={item.path} to={item.path} className="recent-post"><img src={item.image} alt="" loading="lazy" /><span><strong>{item.title}</strong><small>{item.date}</small></span></Link>)}</div><div className="sidebar-panel"><h3>Enquire Now</h3><EnquiryForm compact /></div><div className="sidebar-panel sidebar-contact-mini"><h3>Product Range</h3>{['Hot Rolling Mill', 'Strip Rolling Mill', 'Industrial Gear Boxes', 'Gear Grinding Solutions'].map((label, index) => <Link key={label} to={['/hot-rolling-mill.html', '/strip-rolling-mill.html', '/industrial-gear-boxes.html', '/gear-grinding-solutions-din-1-2.html'][index]}>{label}<ChevronRight size={14} /></Link>)}</div></aside>
      </div></section>
    </div>
  );
}
