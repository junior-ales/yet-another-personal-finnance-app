import * as React from 'react';

import { TrackingPeriodNewProps } from '.';
import { TrackingPeriod } from '../../shared/store';

export class TrackingPeriodNew extends React.Component<TrackingPeriodNewProps> {
  public handleOnSave = (trackingPeriod: TrackingPeriod) => (): void => {
    const { onSaveTrackingPeriod, history } = this.props;
    onSaveTrackingPeriod(trackingPeriod, history);
  };

  public render() {
    const { trackingPeriod } = this.props;

    return (
      <section>
        {trackingPeriod && (
          <section>
            Id: <span>{trackingPeriod.id}</span>
            <button type="button" onClick={this.handleOnSave(trackingPeriod)}>
              Save
            </button>
          </section>
        )}
      </section>
    );
  }
}
