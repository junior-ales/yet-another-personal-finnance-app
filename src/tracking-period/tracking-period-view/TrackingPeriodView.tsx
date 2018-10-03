import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import { Transaction } from '../../shared/store';
import { formatNumber } from '../../shared/utils/formatNumber';
import SpendingChart from '../../transaction/spending-chart';
import TransactionList from '../../transaction/transaction-list';

import './trackingPeriodView.css';

const emptyTransactions: Transaction[] = [];

const aggregateValue = (
  transactions = emptyTransactions,
  initialValue = 0
): number =>
  transactions.reduce((acc, t: Transaction) => acc + t.value, initialValue);

export class TrackingPeriodView extends React.Component<
  TrackingPeriodViewProps
> {
  public render() {
    const { match, trackingPeriod, transactions } = this.props;

    return trackingPeriod ? (
      <section className="TrackingPeriodView">
        <PageHeader>
          Periodo {trackingPeriod.startDate.format('DD/MMM')} &#10141;{' '}
          {trackingPeriod.endDate.format('DD/MMM')}
        </PageHeader>

        <section className="TrackingPeriodView-content">
          <SpendingChart dataValue={transactions} />
        </section>

        <section className="TrackingPeriodView-content">
          <p>
            Valor Corrente{' '}
            <span>
              {formatNumber(
                aggregateValue(transactions, trackingPeriod.initialBudget)
              )}
            </span>
          </p>
          <p>
            Orcamento inicial{' '}
            <span>{formatNumber(trackingPeriod.initialBudget)}</span>
          </p>
          <p>
            Meta de Poupanca{' '}
            <span>{formatNumber(trackingPeriod.plannedSavings)}</span>
          </p>
        </section>

        <TransactionList transactions={transactions} />

        <ButtonLink
          to={match.url + '/transaction/new'}
          label="Criar Transacao"
        />
      </section>
    ) : (
      <Route component={RouteNotFound} />
    );
  }
}
