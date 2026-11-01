import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary'
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  style = {},
  disabled = false,
  ...rest
}) {
  const baseClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  const combinedClass = `${baseClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      style={style}
      disabled={disabled}
      {...rest}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>
  );
}
