import React from 'react';

const Input = ({
  value,
  name,
  id,
  label,
  labelHidden,
  customClasses = '',
  ...props
}) => {
  return (
    <>
      <label className={labelHidden ? 'sr-only' : ''} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className={`form-control ${customClasses}`}
        name={name}
        id={id}
        {...props}
      />
    </>
  );
};

export default Input;
