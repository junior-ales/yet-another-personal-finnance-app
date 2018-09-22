import * as React from 'react';

interface LabelProps {
  value: string;
  htmlFor: string;
}

export const Label: React.StatelessComponent<LabelProps> = ({
  value,
  ...otherProps
}) => <label {...otherProps}>{value}</label>;
