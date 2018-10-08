import * as classNames from 'classnames';
import { Field, FieldProps } from 'formik';
import * as React from 'react';

import './inlineSelectionField.css';

interface InlineSelectionFieldChoices {
  label: string;
  value: string | number;
}

interface InlineSelectionFieldProps {
  name: string;
  label: string;
  choices: InlineSelectionFieldChoices[];
}

export function InlineSelectionField<T = {}>(props: InlineSelectionFieldProps) {
  return (
    <Field name={props.name}>
      {({ form, field }: FieldProps<T>) => {
        const handleOnClick = (value: string | number) => () =>
          form.setFieldValue(field.name, value);

        const buttonClasses = (choiceValue: string | number): string =>
          classNames('InlineSelectionField-button', {
            'is-active': field.value === choiceValue
          });

        const buttonsBoxClasses = (quantity: number): string =>
          classNames('InlineSelectionField-componentBox', {
            'is-halfSize': quantity === 2
          });

        return (
          <div className="InlineSelectionField">
            <div className="InlineSelectionField-componentBox">
              <label className="InlineSelectionField-label">
                {props.label}
              </label>
            </div>
            <div className={buttonsBoxClasses(props.choices.length)}>
              {props.choices.map(choice => (
                <button
                  key={'choice-' + choice.value}
                  type="button"
                  className={buttonClasses(choice.value)}
                  onClick={handleOnClick(choice.value)}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>
        );
      }}
    </Field>
  );
}
