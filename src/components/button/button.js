import React from 'react';
import classnames from 'classnames';

const Button = ({
  type = 'button',
  primary,
  outline,
  fullWidth,
  onClick = () => {},
  children,
  disabled,
  size,
}) => {
  const btnClass = classnames({
    btn: true,
    'btn-primary': !!primary && !outline,
    'btn-outline-primary': !!(primary && outline),
    'w-100': !!fullWidth,
    'btn-lg': size === 'large',
    'btn-sm': size === 'small',
  });
  return (
    <button
      className={btnClass}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
