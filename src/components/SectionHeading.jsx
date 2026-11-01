import React from 'react';

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = 'left',
  style = {}
}) {
  const isCenter = align === 'center';

  return (
    <div
      style={{
        textAlign: align,
        maxWidth: isCenter ? '720px' : 'none',
        margin: isCenter ? '0 auto 50px auto' : '0 0 40px 0',
        ...style
      }}
    >
      {tag && <div className="section-tag">{tag}</div>}
      {title && (
        <h2 className="section-title">
          {title}{' '}
          {highlight && <span className="text-orange">{highlight}</span>}
        </h2>
      )}
      {subtitle && (
        <p
          className="section-subtitle"
          style={{ margin: isCenter ? '0 auto' : '0' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
