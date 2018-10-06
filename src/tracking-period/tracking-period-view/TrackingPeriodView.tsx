import { fromPredicate, Option } from 'fp-ts/lib/Option';
import * as moment from 'moment';
import * as R from 'ramda';
import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
import { PageSubHeader } from '../../shared/components/PageSubHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import { TrackingPeriod, Transaction } from '../../shared/store';
import { formatNumber } from '../../shared/utils/formatNumber';
import SpendingChart from '../../transaction/spending-chart';
import TransactionList from '../../transaction/transaction-list';

import './trackingPeriodView.css';

const hasAnyTransaction: (
  transactions: Transaction[]
) => Option<Transaction[]> = fromPredicate(
  R.compose(
    R.not,
    R.isEmpty
  )
);

const onlyDebit = (ts: Transaction[]): Transaction[] =>
  ts.filter(t => t.type === 'debit');

const emptyTransactions: Transaction[] = [];

const aggregateValue = (
  transactions = emptyTransactions,
  initialValue = 0
): number =>
  transactions.reduce((acc, t: Transaction) => acc + t.value, initialValue);

const sumIsMoreThanZero: (transactions: Transaction[]) => boolean = R.compose(
  (v: number) => Math.abs(v) > 0,
  aggregateValue
);

const displayGraphs = (transactions: Transaction[]): boolean =>
  hasAnyTransaction(transactions)
    .map(onlyDebit)
    .map(sumIsMoreThanZero)
    .getOrElse(false);

const currentDateIsWithingPeriod = fromPredicate(
  (t: TrackingPeriod): boolean => moment().isBetween(t.startDate, t.endDate)
);

const remainingDaysTill = (endDate: moment.Moment): number =>
  endDate.diff(moment(), 'days');

const remainingDays = (trackingPeriod: TrackingPeriod): string =>
  currentDateIsWithingPeriod(trackingPeriod)
    .map(t => remainingDaysTill(t.endDate))
    .map(days => `em ${days} dia${days === 1 ? '' : 's'}`)
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

        {displayGraphs(transactions) && (
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
                <td className="TrackingPeriodDetails-content">
                  {remainingDays(trackingPeriod)}
                </td>
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
