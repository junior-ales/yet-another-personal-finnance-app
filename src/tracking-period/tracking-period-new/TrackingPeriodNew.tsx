import { Form, Formik, FormikActions } from 'formik';
import * as React from 'react';
import * as uuid from 'uuid';

import { TrackingPeriodNewProps } from '.';
import { DatePickerField } from '../../shared/components/datepicker-field';
import { InputField } from '../../shared/components/input-field';
import { TrackingPeriod } from '../../shared/store';

const newTrackingPeriod = (): TrackingPeriod => ({
  endDate: new Date(),
  id: uuid(),
  initialBudget: 0,
  plannedSavings: 0,
  startDate: new Date()
});

export class TrackingPeriodNew extends React.Component<TrackingPeriodNewProps> {
  private initialValues: TrackingPeriod;

  constructor(props: TrackingPeriodNewProps) {
    super(props);

    this.initialValues = newTrackingPeriod();
  }

  public handleOnSave = (
    trackingPeriod: TrackingPeriod,
    actions: FormikActions<TrackingPeriod>
  ): void => {
    const { onSaveTrackingPeriod, history } = this.props;
    onSaveTrackingPeriod(trackingPeriod, history);
    actions.setSubmitting(false);
  };

  public render() {
    return (
      <section>
        <header>New Tracking Period</header>
        <Formik initialValues={this.initialValues} onSubmit={this.handleOnSave}>
          {() => (
            <Form>
              <InputField
                type="number"
                name="initialBudget"
                label="Initial Budget"
              />
              <InputField
                type="number"
                name="plannedSavings"
                label="PlannedSavings"
              />
              <DatePickerField name="startDate" label="Start Date" />
              <DatePickerField name="endDate" label="End Date" />
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </section>
    );
  }
}
