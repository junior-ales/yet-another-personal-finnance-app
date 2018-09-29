import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import { TrackingPeriodViewProps } from '.';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class TrackingPeriodView extends React.Component<
  TrackingPeriodViewProps
> {
  public render() {
    const { trackingPeriod } = this.props;

    return trackingPeriod ? (
      <section>
        <h2>TP Details</h2>
        {JSON.stringify(trackingPeriod)}
        <Link to="/transaction/new">New Transaction</Link>
      </section>
    ) : (
      <Route component={Oops} />
    );
  }
}
