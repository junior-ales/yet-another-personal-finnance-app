import * as React from 'react';
import { Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import SpendingChart from '../../chart/spending-chart';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { ButtonsGroup } from '../../shared/components/ButtonsGroup';
import { PageHeader } from '../../shared/components/PageHeader';
import { PageSubHeader } from '../../shared/components/PageSubHeader';
import { RouteNotFound } from '../../shared/components/RouteNotFound';
import { TrackingPeriod } from '../../shared/store';
import { formatNumber } from '../../shared/utils/formatNumber';
import TransactionList from '../../transaction/transaction-list';
import { hasDebitTransactions } from '../../transaction/transactions';
import {
  currentSavings,
  currentValue,
  netValue,
  remainindDaysTillEndDate
} from '../trackingPeriods';

import './trackingPeriodView.css';

const remainingDays = (trackingPeriod: TrackingPeriod): string =>
  remainindDaysTillEndDate(trackingPeriod)
    .map((days: number) => `em ${days} dia${days === 1 ? '' : 's'}`)
    .getOrElse('-');

interface NonEmptyTrackingPeriodProps extends TrackingPeriodViewProps {
  trackingPeriod: TrackingPeriod;
}

class NonEmptyTrackingPeriodView extends React.Component<
  NonEmptyTrackingPeriodProps
> {
  public handleClickOnGraph = () => {
    // TODO uncomment it to wire on the chart view page
    // const { history, location } = this.props;
    // history.push(location.pathname + '/graph/debit');
  };

  public render() {
    const { trackingPeriod, transactions, match } = this.props;

    return (
      <section className="TrackingPeriodView">
        <PageHeader>
          Periodo {trackingPeriod.startDate.format('DD/MMM')} &#10141;{' '}
          {trackingPeriod.endDate.format('DD/MMM')}
        </PageHeader>

        {hasDebitTransactions(transactions) && (
          <>
            <section
              className="TrackingPeriodView-content"
              onClick={this.handleClickOnGraph}
            >
              <SpendingChart dataValue={transactions} />
            </section>

            <PageSubHeader title="Detalhes" />
          </>
        )}

        <section className="TrackingPeriodView-content">
          <table className="TrackingPeriodDetails-table">
            <tbody>
              <tr className="TrackingPeriodDetails-row">
                <td className="TrackingPeriodDetails-label">Valor a Gastar</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(netValue(trackingPeriod, transactions))}
                </td>
                <td className="TrackingPeriodDetails-label">Valor Corrente</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(currentValue(trackingPeriod, transactions))}
                </td>
              </tr>
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
                <td className="TrackingPeriodDetails-label">
                  Meta de Poupanca
                </td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(trackingPeriod.plannedSavings)}
                </td>
                <td className="TrackingPeriodDetails-label">Poupanca</td>
                <td className="TrackingPeriodDetails-content">
                  {formatNumber(currentSavings(trackingPeriod, transactions))}
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <TransactionList transactions={transactions} />

        <ButtonsGroup>
          <ButtonLink to={`/tracking-period`} secondary={true} label="Voltar" />
          <ButtonLink
            to={match.url + '/transaction/new'}
            label="Criar Transacao"
          />
        </ButtonsGroup>
      </section>
    );
  }
}

export const TrackingPeriodView: React.SFC<TrackingPeriodViewProps> = props => {
  const { trackingPeriod, ...otherProps } = props;

  return trackingPeriod ? (
    <NonEmptyTrackingPeriodView
      {...otherProps}
      trackingPeriod={trackingPeriod}
    />
  ) : (
    <Route component={RouteNotFound} />
  );
};
