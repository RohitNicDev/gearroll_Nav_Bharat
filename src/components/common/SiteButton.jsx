import { Button } from 'antd';

export default function SiteButton({ children, href, to, variant = 'primary', className = '', onClick, ...props }) {
  const type = variant === 'outline' ? 'default' : variant === 'text' ? 'text' : 'primary';
  const mergedClass = `site-button site-button--${variant} ${className}`.trim();
  if (to) {
    return <Button type={type} className={mergedClass} href={to} onClick={onClick} {...props}>{children}</Button>;
  }
  if (href) {
    return <Button type={type} className={mergedClass} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} onClick={onClick} {...props}>{children}</Button>;
  }
  return <Button type={type} className={mergedClass} onClick={onClick} {...props}>{children}</Button>;
}
