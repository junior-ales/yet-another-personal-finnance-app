import * as classNames from 'classnames';
import * as React from 'react';

import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  fixDown?: boolean;
  secondary?: boolean;
}

export const Button: React.SFC<ButtonProps> = props => {
  const {
    value,
    type = 'submit',
    secondary,
    fixDown,
    children,
    ...otherProps
  } = props;

  const buttonWrapperClasses = classNames('Button-wrapper', {
    'is-fixedDown': fixDown
  });

  const buttonClasses = classNames('Button', {
    'Button--primary': !secondary,
    'Button--secondary': secondary
  });

  return (
    <div className={buttonWrapperClasses}>
      <button type={type} className={buttonClasses} {...otherProps}>
        {value ? value : children}
      </button>
    </div>
  );
};
