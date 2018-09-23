import * as React from 'react';

interface InputProps {
  id: string;
  type: 'text' | 'number';
  value?: string;
  onChange: (value: string) => void;
}

const handleOnChange = (onChange: InputProps['onChange']) => (
  event: React.ChangeEvent<HTMLInputElement>
) => onChange(event.target.value);

export const Input: React.StatelessComponent<InputProps> = ({
  onChange,
  ...otherProps
}) => <input {...otherProps} onChange={handleOnChange(onChange)} />;
