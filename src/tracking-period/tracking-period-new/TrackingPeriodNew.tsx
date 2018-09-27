import { Field, FieldProps, Form, Formik, FormikActions } from 'formik';
import * as React from 'react';
import * as uuid from 'uuid';

import { TrackingPeriodNewProps } from '.';
import { TrackingPeriod } from '../../shared/store';

const newTrackingPeriod = (): TrackingPeriod => ({
  endDate: new Date(),
  id: uuid(),
  initialBudget: 0,
  plannedSavings: 0,
  startDate: new Date()
});

export class TrackingPeriodNew extends React.Component<TrackingPeriodNewProps> {
  public handleOnSave = (
    trackingPeriod: TrackingPeriod,
    actions: FormikActions<TrackingPeriod>
  ): void => {
    const { onSaveTrackingPeriod, history } = this.props;
    onSaveTrackingPeriod(trackingPeriod, history);
    actions.setSubmitting(false);
  };

  public render() {
    const trackingPeriod = this.props.trackingPeriod || newTrackingPeriod();

    return (
      <section>
        <header>New Tracking Period</header>
        <Formik initialValues={trackingPeriod} onSubmit={this.handleOnSave}>
          {() => (
            <Form>
              <Field name="initialBudget">
                {(props: FieldProps<TrackingPeriod>) => (
                  <div>
                    <label htmlFor={props.field.name}>Initial Budget</label>
                    <input
                      type="number"
                      id={props.field.name}
                      {...props.field}
                    />
                  </div>
                )}
              </Field>
              <Field name="plannedSavings">
                {(props: FieldProps<TrackingPeriod>) => (
                  <div>
                    <label htmlFor={props.field.name}>Planned Savings</label>
                    <input
                      type="number"
                      id={props.field.name}
                      {...props.field}
                    />
                  </div>
                )}
              </Field>
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </section>
    );
  }
}
