import { Form, Formik, FormikActions } from 'formik';
import * as moment from 'moment';
import * as React from 'react';
import * as uuid from 'uuid';

import { TrackingPeriodNewProps } from '.';
import { Button } from '../../shared/components/Button';
import { DatePickerField } from '../../shared/components/DatePickerField';
import { InputField } from '../../shared/components/InputField';
import { PageHeader } from '../../shared/components/PageHeader';
import { TrackingPeriod } from '../../shared/store';

import './trackingPeriodNew.css';

const newTrackingPeriod = (): TrackingPeriod => ({
  endDate: moment(),
  id: uuid(),
  initialBudget: 0,
  plannedSavings: 0,
  startDate: moment()
});

interface TrackingPeriodNewState {
  isEditing: boolean;
}

export class TrackingPeriodNew extends React.Component<
  TrackingPeriodNewProps,
  TrackingPeriodNewState
> {
  private initialValues: TrackingPeriod;

  constructor(props: TrackingPeriodNewProps) {
    super(props);

    this.initialValues = newTrackingPeriod();

    this.state = { isEditing: false };
  }

  public startEditingField = () => this.setState({ isEditing: true });

  public finishEditingField = () => this.setState({ isEditing: false });

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
        <PageHeader title="Novo Periodo" />

        <Formik initialValues={this.initialValues} onSubmit={this.handleOnSave}>
          {() => (
            <Form className="NewTrackingPeriodForm">
              <InputField
                type="number"
                name="initialBudget"
                label="Orcamento Inicial"
                placeholder="Utilize apenas numeros e ponto. Ex: 42.42"
                onFocus={this.startEditingField}
                onBlur={this.finishEditingField}
              />
              <InputField
                type="number"
                name="plannedSavings"
                label="Meta de Poupanca"
                placeholder="Utilize apenas numeros e ponto. Ex: 42.42"
                onFocus={this.startEditingField}
                onBlur={this.finishEditingField}
              />
              <DatePickerField
                name="startDate"
                initialDate={moment()}
                label="Data deste Orcamento"
              />
              <DatePickerField
                name="endDate"
                initialDate={moment().add(1, 'month')}
                label="Data do Proximo Orcamento"
              />
              <Button
                type="submit"
                value="Salvar"
                fixDown={this.state.isEditing}
              />
            </Form>
          )}
        </Formik>
      </section>
    );
  }
}
