import * as React from 'react';

import './button.css';

export const Button: React.SFC<React.ButtonHTMLAttributes<{}>> = props => {
  const { value, type = 'submit', children, ...otherProps } = props;

  return (
    <div className="Button-wrapper">
      <button type={type} className="Button" {...otherProps}>
        {value ? value : children}
      </button>
    </div>
  );
};
