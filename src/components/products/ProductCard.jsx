import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link className="product-card__image" to={product.path} aria-label={`View ${product.title}`}><img src={product.image} alt={product.title} loading="lazy" /></Link>
      <div className="product-card__body">
        <span className="product-card__eyebrow">{product.eyebrow || 'Our Product'}</span>
        <h3><Link to={product.path}>{product.title}</Link></h3>
        <p>{product.excerpt}</p>
        <Link className="text-link" to={product.path}>More Details <ArrowRight size={15} /></Link>
      </div>
    </article>
  );
}
