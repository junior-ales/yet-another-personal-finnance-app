import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './buttonLink.css';

interface ButtonLinkProps {
  to: string;
  label?: string;
  secondary?: boolean;
  fixDown?: boolean;
  [props: string]: any;
}

export const ButtonLink: React.SFC<ButtonLinkProps> = props => {
  const { to, label, secondary, children, fixDown, ...otherProps } = props;

  const buttonLinkWrapperClasses = classNames('ButtonLink-wrapper', {
    'is-fixedDown': fixDown
  });

  const buttonLinkClasses = classNames('ButtonLink', {
    'ButtonLink--primary': !secondary,
    'ButtonLink--secondary': secondary
  });

  return (
    <div className={buttonLinkWrapperClasses}>
      <Link to={to} className={buttonLinkClasses} {...otherProps}>
        {label ? label : children}
      </Link>
    </div>
  );
};
