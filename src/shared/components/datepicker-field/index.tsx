import { Field, FieldProps } from 'formik';
import { Moment } from 'moment';
import * as React from 'react';
import { SingleDatePicker } from 'react-dates';

interface DatePickerFieldProps {
  name: string;
  label?: string;
  initialDate?: Moment;
}

interface DatePickerFieldState {
  date: Moment | null;
  isFocused: boolean;
}

export class DatePickerField<T = {}> extends React.Component<
  DatePickerFieldProps,
  DatePickerFieldState
> {
  constructor(props: DatePickerFieldProps) {
    super(props);

    this.state = {
      date: props.initialDate || null,
      isFocused: false
    };
  }

  public render() {
    return (
      <Field name={this.props.name}>
        {({ form, field }: FieldProps<T>) => {
          return (
            <>
              {this.props.label && (
                <label htmlFor={`date-picker-${field.name}`}>
                  {this.props.label}
                </label>
              )}
              <SingleDatePicker
                id={`date-picker-${field.name}`}
                date={this.state.date}
                // tslint:disable-next-line:jsx-no-lambda
                onDateChange={date =>
                  this.setState({ date }, () =>
                    form.setFieldValue(field.name, date)
                  )
                }
                focused={this.state.isFocused}
                // tslint:disable-next-line:jsx-no-lambda
                onFocusChange={({ focused }) =>
                  this.setState({ isFocused: !!focused })
                }
                orientation="vertical"
                displayFormat="DD/MMM/YYYY"
                isOutsideRange={() => false} // tslint:disable-line:jsx-no-lambda
                numberOfMonths={1}
                verticalHeight={400}
                block={true}
                small={true}
              />
            </>
          );
        }}
      </Field>
    );
  }
}
