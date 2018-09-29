import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class TrackingPeriodView extends React.Component<
  TrackingPeriodViewProps
> {
  public render() {
    const { match, trackingPeriod, transactions } = this.props;

    return trackingPeriod ? (
      <section>
        <h2>TP Details</h2>
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
