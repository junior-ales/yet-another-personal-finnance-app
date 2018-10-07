import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './buttonLink.css';

export interface ButtonLinkProps {
  to: string;
  label?: string;
  secondary?: boolean;
  halfSize?: boolean;
  [props: string]: any;
}

export const ButtonLink: React.SFC<ButtonLinkProps> = props => {
  const { to, label, secondary, children, halfSize, ...otherProps } = props;

  const buttonLinkClasses = classNames('ButtonLink', {
    'ButtonLink--primary': !secondary,
    'ButtonLink--secondary': secondary,
    'is-halfSize': halfSize
  });

  return (
    <Link to={to} className={buttonLinkClasses} {...otherProps}>
      {label ? label : children}
    </Link>
  );
};
