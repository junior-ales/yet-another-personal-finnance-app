import * as React from 'react';
import { Link } from 'react-router-dom';

import './buttonLink.css';

interface ButtonLinkProps {
  to: string;
  label?: string;
  [props: string]: any;
}

export const ButtonLink: React.SFC<ButtonLinkProps> = props => {
  const { to, label, children, ...otherProps } = props;

  return (
    <div className="ButtonLink-wrapper">
      <Link to={to} className="ButtonLink" {...otherProps}>
        {label ? label : children}
      </Link>
    </div>
  );
};
