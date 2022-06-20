import React from 'react';

export function Button ({ disabled, onClick, children }) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
};