import React from 'react';

export function Heading ({ className, children}) {
  return (
    <h1 className={`${className} h1`}>
      {children}
    </h1>
  )
};