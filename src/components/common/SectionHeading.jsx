export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`section-heading ${center ? 'section-heading--center' : ''} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}
