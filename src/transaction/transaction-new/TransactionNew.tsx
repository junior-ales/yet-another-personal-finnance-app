import { Form, Formik, FormikActions } from 'formik';
import * as moment from 'moment';
import * as React from 'react';
import * as uuid from 'uuid';

import { TransactionNewProps } from '.';
import { DatePickerField } from '../../shared/components/DatePickerField';
import { InputField } from '../../shared/components/InputField';
import { Transaction } from '../../shared/store';

const newTransaction = (trackingPeriodId: string): Transaction => ({
  category: 'other',
  date: moment(),
  description: '',
  id: uuid(),
  trackingPeriodId,
  type: 'debit',
  value: 0
});

export class TransactionNew extends React.Component<TransactionNewProps> {
  private initialValues: Transaction;

  constructor(props: TransactionNewProps) {
    super(props);

    this.initialValues = newTransaction(props.trackingPeriodSelected);
  }

  public handleOnSave = (
    transaction: Transaction,
    actions: FormikActions<Transaction>
  ): void => {
    const { onSaveTransaction, history } = this.props;
    onSaveTransaction(transaction, history);
    actions.setSubmitting(false);
  };

  public render() {
    return (
      <section>
        <header>New Transaction</header>
        <Formik initialValues={this.initialValues} onSubmit={this.handleOnSave}>
          {() => (
            <Form>
              <InputField type="text" name="description" label="Description" />
              <InputField type="text" name="category" label="Category" />
              <InputField type="text" name="type" label="Type" />
              <InputField type="number" name="value" label="Value" />
              <DatePickerField name="date" label="Date" />
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </section>
    );
  }
}
