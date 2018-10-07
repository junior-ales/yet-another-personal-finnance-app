import * as classNames from 'classnames';
import * as React from 'react';

import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  halfSize?: boolean;
  secondary?: boolean;
}

export const Button: React.SFC<ButtonProps> = props => {
  const {
    value,
    type = 'submit',
    secondary,
    halfSize,
    children,
    ...otherProps
  } = props;

  const buttonClasses = classNames('Button', {
    'Button--primary': !secondary,
    'Button--secondary': secondary,
    'is-halfSize': halfSize
  });

  return (
    <button type={type} className={buttonClasses} {...otherProps}>
      {value ? value : children}
    </button>
  );
};
