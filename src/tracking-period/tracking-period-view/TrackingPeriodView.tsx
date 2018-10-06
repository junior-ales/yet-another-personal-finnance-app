import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
import { PageSubHeader } from '../../shared/components/PageSubHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import { TrackingPeriod } from '../../shared/store';
import { formatNumber } from '../../shared/utils/formatNumber';
import SpendingChart from '../../transaction/spending-chart';
import TransactionList from '../../transaction/transaction-list';
import { hasDebitTransactions } from '../../transaction/transactions';
import {
  currentValue,
  remainindDaysTillEndDate,
  trackingPeriodNetValue
} from '../trackingPeriods';

import './trackingPeriodView.css';

const remainingDays = (trackingPeriod: TrackingPeriod): string =>
  remainindDaysTillEndDate(trackingPeriod)
    .map((days: number) => `em ${days} dia${days === 1 ? '' : 's'}`)
    .getOrElse('-');

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

        {hasDebitTransactions(transactions) && (
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
                <td className="TrackingPeriodDetails-label">Salario</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(trackingPeriod.initialBudget)}
                </td>
                <td className="TrackingPeriodDetails-label">Proximo Salario</td>
                <td className="TrackingPeriodDetails-content">
                  {remainingDays(trackingPeriod)}
                </td>
              </tr>
              <tr className="TrackingPeriodDetails-row">
                <td className="TrackingPeriodDetails-label">Valor a Gastar</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(
                    trackingPeriodNetValue(trackingPeriod, transactions)
                  )}
                </td>
                <td className="TrackingPeriodDetails-label">Valor Corrente</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(currentValue(trackingPeriod, transactions))}
                </td>
              </tr>
              <tr className="TrackingPeriodDetails-row">
                <td className="TrackingPeriodDetails-label">
                  Meta de Poupanca
                </td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(trackingPeriod.plannedSavings)}
                </td>
                <td className="TrackingPeriodDetails-label" />
                <td className="TrackingPeriodDetails-content" />
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
