import { Field, FieldProps } from 'formik';
import * as React from 'react';

import './inputField.css';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label?: string;
}

export function InputField<T = {}>(inputProps: InputFieldProps) {
  const { name, type, label, onBlur, ...otherProps } = inputProps;

  return (
    <Field name={name}>
      {(props: FieldProps<T>) => {
        const { onBlur: fieldOnBlur, value, ...otherFieldProps } = props.field;

        const handleOnBlur = (e: any) => {
          if (onBlur) {
            onBlur(e);
          }
          fieldOnBlur(e);
        };

        return (
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
                {...otherProps}
                {...otherFieldProps}
                id={props.field.name}
                type={type}
                className="InputField-input"
                onBlur={handleOnBlur}
                value={value === 0 ? '' : value}
              />
            </div>
          </div>
        );
      }}
    </Field>
  );
}
