import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';
import { PageHeader } from '../../shared/components/PageHeader';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class TrackingPeriodView extends React.Component<
  TrackingPeriodViewProps
> {
  public render() {
    const { match, trackingPeriod, transactions } = this.props;

    return trackingPeriod ? (
      <section>
        <PageHeader>
          Periodo {trackingPeriod.startDate.format('DD/MMM')} &#10141;{' '}
          {trackingPeriod.endDate.format('DD/MMM')}
        </PageHeader>

        {JSON.stringify(trackingPeriod)}
        {JSON.stringify(transactions)}
        <div>
          <Link to={match.url + '/transaction/new'}>New Transaction</Link>
        </div>
      </section>
    ) : (
      <Route component={Oops} />
    );
  }
}
