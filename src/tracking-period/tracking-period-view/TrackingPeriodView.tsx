import * as R from 'ramda';
import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
import { PageSubHeader } from '../../shared/components/PageSubHeader';
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

        {R.not(R.isEmpty(transactions)) && (
          <>
            <section className="TrackingPeriodView-content">
              <SpendingChart dataValue={transactions} />
            </section>

            <PageSubHeader title="Detalhes" />
          </>
        )}

        <section className="TrackingPeriodView-content">
          <table className="TrackingPeriodDetails-table">
            <tbody>
              <tr className="TrackingPeriodDetails-row">
                <td className="TrackingPeriodDetails-label">Proximo Salario</td>
                <td className="TrackingPeriodDetails-content">em 14 dias</td>
                <td className="TrackingPeriodDetails-label">Valor a Gastar</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(321)}
                </td>
              </tr>
              <tr className="TrackingPeriodDetails-row">
                <td className="TrackingPeriodDetails-label">Valor Corrente</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(
                    aggregateValue(transactions, trackingPeriod.initialBudget)
                  )}
                </td>
                <td className="TrackingPeriodDetails-label">
                  Meta de Poupanca
                </td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(trackingPeriod.plannedSavings)}
                </td>
              </tr>
            </tbody>
          </table>
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
