import React from 'react';

export function Repo ({ href, children }) {
  return (
    <li className="send__item">
      <a className="send__link body-200" href={href}>
        {children}
      </a>
    </li>
  )
};