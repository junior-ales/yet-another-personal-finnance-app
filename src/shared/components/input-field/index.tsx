import { Field, FieldProps } from 'formik';
import * as React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label?: string;
}

export function InputField<T = {}>(inputProps: InputFieldProps) {
  const { name, type, label, ...otherProps } = inputProps;

  return (
    <Field name={name}>
      {(props: FieldProps<T>) => (
        <div>
          {label && <label htmlFor={props.field.name}>{label}</label>}
          <input
            id={props.field.name}
            type={type}
            {...otherProps}
            {...props.field}
          />
        </div>
      )}
    </Field>
  );
}
