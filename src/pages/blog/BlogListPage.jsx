import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import PageHero from '../../components/common/PageHero';
import { useSitePosts } from '../../services/hooks/useSitePosts';

export default function BlogListPage() {
  const { data: blogPosts = [], isLoading } = useSitePosts();
  if (isLoading) return <div className="loading-page"><span className="loading-spinner" />Loading posts…</div>;
  return <div className="content-page blog-list-page"><PageHero title="Blog" subtitle="News, insights and updates" /><section className="section"><div className="container blog-list-grid">{blogPosts.map((post) => <article className="news-card blog-list-card" key={post.path}><Link to={post.path} className="news-card__image"><img src={post.image} alt={post.title} loading="lazy" /></Link><div className="news-card__body"><div className="news-card__date"><CalendarDays size={14} /> {post.date}</div><h2><Link to={post.path}>{post.title}</Link></h2><p>{post.excerpt}</p><Link to={post.path} className="text-link">Read More <ArrowRight size={14} /></Link></div></article>)}</div></section></div>;
}
