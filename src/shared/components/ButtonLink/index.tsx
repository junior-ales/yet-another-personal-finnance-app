import * as React from 'react';
import { Link } from 'react-router-dom';

import './buttonLink.css';

export const ButtonLink = (props: any) => {
  const { to, label, ...otherProps } = props;

  return (
    <div className="ButtonLink-wrapper">
      <Link to={to} className="ButtonLink" {...otherProps}>
        {label}
      </Link>
    </div>
  );
};
