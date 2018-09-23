import * as React from 'react';

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
      </section>
    );
  }
}
