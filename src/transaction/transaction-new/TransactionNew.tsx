import { Form, Formik, FormikActions } from 'formik';
import * as moment from 'moment';
import * as React from 'react';
import * as uuid from 'uuid';

import { TransactionNewProps } from '.';
import { Button } from '../../shared/components/Button';
import { ButtonsGroup } from '../../shared/components/ButtonsGroup';
import { DatePickerField } from '../../shared/components/DatePickerField';
import { InlineSelectionField } from '../../shared/components/InlineSelectionField';
import { InputField } from '../../shared/components/InputField';
import { PageHeader } from '../../shared/components/PageHeader';
import {
  Transaction,
  TransactionCategories,
  TransactionTypes
} from '../../shared/store';

import './transactionNew.css';

const newTransaction = (trackingPeriodId: string): Transaction => ({
  category: 'other',
  date: moment(),
  description: '',
  id: uuid(),
  trackingPeriodId,
  type: 'debit',
  value: 0
});

const transactionTypeChoices: Array<{
  label: string;
  value: TransactionTypes;
}> = [
  { label: 'Credito', value: 'credit' },
  { label: 'Debito', value: 'debit' }
];

const transactionCategoryChoices: Array<{
  label: string;
  value: TransactionCategories;
}> = [
  { label: 'gasto fixo', value: 'fixed-expense' },
  { label: 'transporte', value: 'transport' },
  { label: 'alimentacao', value: 'food' },
  { label: 'outros', value: 'other' }
];

const setValueSign = (transaction: Transaction): Transaction => {
  const value: number =
    transaction.type === 'debit'
      ? Math.abs(transaction.value) * -1
      : Math.abs(transaction.value);

  return { ...transaction, value };
};

interface TransactionNewState {
  isEditing: boolean;
}

export class TransactionNew extends React.Component<
  TransactionNewProps,
  TransactionNewState
> {
  private initialValues: Transaction;

  constructor(props: TransactionNewProps) {
    super(props);

    this.state = { isEditing: false };
    this.initialValues = newTransaction(props.trackingPeriodSelected);
  }

  public startEditingField = () => this.setState({ isEditing: true });

  public finishEditingField = () => this.setState({ isEditing: false });

  public handleOnSave = (
    transaction: Transaction,
    { setSubmitting }: FormikActions<Transaction>
  ): void => {
    const { onSaveTransaction, history } = this.props;

    onSaveTransaction(setValueSign(transaction), history);
    setSubmitting(false);
  };

  public render() {
    return (
      <section>
        <PageHeader title="Nova Transacao" />
        <Formik initialValues={this.initialValues} onSubmit={this.handleOnSave}>
          {() => (
            <Form className="NewTransactionForm">
              <InputField
                type="text"
                name="description"
                label="Descricao"
                placeholder="Descricao da transacao financeira"
                autoFocus={true}
                onFocus={this.startEditingField}
                onBlur={this.finishEditingField}
              />
              <InlineSelectionField
                name="category"
                label="Categoria"
                choices={transactionCategoryChoices}
              />
              <InlineSelectionField
                name="type"
                label="Tipo"
                choices={transactionTypeChoices}
              />
              <InputField
                type="number"
                name="value"
                label="Valor"
                placeholder="Utilize apenas numeros e ponto. Ex: 42.42"
                required={true}
                onFocus={this.startEditingField}
                onBlur={this.finishEditingField}
              />
              <DatePickerField
                name="date"
                initialDate={moment()}
                label="Data"
              />
              <ButtonsGroup fixDown={this.state.isEditing}>
                <Button type="submit" value="Salvar" />
              </ButtonsGroup>
            </Form>
          )}
        </Formik>
      </section>
    );
  }
}
