import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import { Transaction } from '../../shared/store';
import TransactionList from '../../transaction/transaction-list';

import './trackingPeriodView.css';

const emptyTransactions: Transaction[] = [];

const aggregateValue = (transactions = emptyTransactions): number =>
  transactions.reduce((acc, t) => acc + t.value, 0);

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
          <p>
            Valor Corrente{' '}
            <span>
              £{trackingPeriod.initialBudget - aggregateValue(transactions)}
            </span>
          </p>
          <p>
            Orcamento inicial <span>£{trackingPeriod.initialBudget}</span>
          </p>
          <p>
            Meta de Poupanca <span>£{trackingPeriod.plannedSavings}</span>
          </p>
        </section>

        <TransactionList trackingPeriodId={trackingPeriod.id} />

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
