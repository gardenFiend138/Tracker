import React from 'react';

function Button({
  isDisabled = false,
  onClick,
  text,
  type = 'button',
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
