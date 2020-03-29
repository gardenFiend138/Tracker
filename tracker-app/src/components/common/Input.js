import React from 'react';

function Input({
  label,
  isLabelHidden = false,
  onChange,
  type = 'text',
  value,
}) {
  return (
    <label>
      {!isLabelHidden && label}
      <input
        onChange={onChange}
        type={type}
        value={value}
      />
    </label>
  );
}

export default Input;
