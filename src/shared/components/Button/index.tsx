import * as classNames from 'classnames';
import * as React from 'react';

import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<{}> {
  secondary?: boolean;
}

export const Button: React.SFC<ButtonProps> = props => {
  const { value, type = 'submit', secondary, children, ...otherProps } = props;

  const buttonClasses = classNames('Button', {
    'Button--primary': !secondary,
    'Button--secondary': secondary
  });

  return (
    <div className="Button-wrapper">
      <button type={type} className={buttonClasses} {...otherProps}>
        {value ? value : children}
      </button>
    </div>
  );
};
