import * as React from 'react';
import { Link } from 'react-router-dom';

import { TrackingPeriodNewProps } from '.';

export class TrackingPeriodNew extends React.Component<TrackingPeriodNewProps> {
  constructor(props: TrackingPeriodNewProps) {
    super(props);

    props.onCreateTrackingPeriod();
  }

  public render() {
    const { trackingPeriod } = this.props;

    return (
      <section>
        {trackingPeriod && (
          <section>
            Id: <span>{trackingPeriod.id}</span>
          </section>
        )}

        <Link to="/tracking-periods">Home</Link>
      </section>
    );
  }
}
