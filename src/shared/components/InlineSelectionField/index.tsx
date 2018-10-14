import { Field, FieldProps } from 'formik';
import * as React from 'react';

import { InlineSelectionRow } from '../InlineSelectionRow';

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

        return (
          <InlineSelectionRow
            selectedValue={field.value}
            choices={props.choices}
            label={props.label}
            handleOnClick={handleOnClick}
          />
        );
      }}
    </Field>
  );
}
