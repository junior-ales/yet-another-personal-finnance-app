import * as classNames from 'classnames';
import * as React from 'react';

import { ButtonProps } from '../Button';
import { ButtonLinkProps } from '../ButtonLink';

import './buttonsGroup.css';

interface ButtonsGroupProps {
  fixDown?: boolean;
  children: React.ReactNode;
}

type ButtonReactElem = React.ReactElement<ButtonProps | ButtonLinkProps>;

export const ButtonsGroup: React.SFC<ButtonsGroupProps> = props => {
  const buttonsGroupClasses = classNames('ButtonsGroup', {
    'is-fixedDown': props.fixDown
  });

  const hasMoreThanOneButton = React.Children.count(props.children) > 1;

  return (
    <div className={buttonsGroupClasses}>
      {React.Children.map(props.children, (child: ButtonReactElem) =>
        React.cloneElement(child, { halfSize: hasMoreThanOneButton })
      )}
    </div>
  );
};
