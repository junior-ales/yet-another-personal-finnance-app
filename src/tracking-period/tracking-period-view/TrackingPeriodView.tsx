import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import TransactionList from '../../transaction/transaction-list';

const transactionsSum = 10;

export class TrackingPeriodView extends React.Component<
  TrackingPeriodViewProps
> {
  public render() {
    const { match, trackingPeriod } = this.props;

    return trackingPeriod ? (
      <section>
        <PageHeader>
          Periodo {trackingPeriod.startDate.format('DD/MMM')} &#10141;{' '}
          {trackingPeriod.endDate.format('DD/MMM')}
        </PageHeader>

        <section>
          <p>
            Valor Corrente{' '}
            <span>£{trackingPeriod.initialBudget - transactionsSum}</span>
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
          label="Nova Transacao"
        />
      </section>
    ) : (
      <Route component={RouteNotFound} />
    );
  }
}
