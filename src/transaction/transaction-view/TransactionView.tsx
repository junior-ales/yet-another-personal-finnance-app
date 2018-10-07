import * as React from 'react';
import { Route } from 'react-router-dom';

import { TransactionViewProps } from '.';
import { Button } from '../../shared/components/Button';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { ButtonsGroup } from '../../shared/components/ButtonsGroup';
import { PageHeader } from '../../shared/components/PageHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import { formatNumber } from '../../shared/utils/formatNumber';

import './transactionView.css';

export class TransactionView extends React.Component<TransactionViewProps> {
  public handleDeleteTransaction = () => {
    const { onDeleteTransaction, transaction, history } = this.props;

    if (transaction) {
      onDeleteTransaction(transaction, history);
    }
  };

  public render() {
    const { transaction } = this.props;

    return transaction ? (
      <section>
        <PageHeader title="Detalhe da Transacao" />

        <section className="TransactionView">
          <p>{transaction.description || '<Sem descricao>'}</p>
          <p>{transaction.date.format('DD/MMM/YYYY')}</p>
          <p>{transaction.category}</p>
          <p>{transaction.type}</p>
          <p>{formatNumber(transaction.value)}</p>
        </section>

        <ButtonsGroup>
          <Button type="button" onClick={this.handleDeleteTransaction}>
            Delete
          </Button>
          <ButtonLink
            to={`/tracking-period/${transaction.trackingPeriodId}`}
            secondary={true}
            label="Voltar"
          />
        </ButtonsGroup>
      </section>
    ) : (
      <Route component={RouteNotFound} />
    );
  }
}
