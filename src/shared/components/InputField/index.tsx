import { Field, FieldProps } from 'formik';
import * as React from 'react';

import './inputField.css';

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
        <div className="InputField">
          {label && (
            <div className="InputField-componentBox">
              <label className="InputField-label" htmlFor={props.field.name}>
                {label}
              </label>
            </div>
          )}
          <div className="InputField-componentBox">
            <input
              className="InputField-input"
              id={props.field.name}
              type={type}
              {...otherProps}
              {...props.field}
            />
          </div>
        </div>
      )}
    </Field>
  );
}
