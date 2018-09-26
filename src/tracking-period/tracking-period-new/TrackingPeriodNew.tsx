import * as React from 'react';
import { Link } from 'react-router-dom';

import { TrackingPeriodNewProps } from '.';
import { TrackingPeriod } from '../../shared/store';

export class TrackingPeriodNew extends React.Component<TrackingPeriodNewProps> {
  constructor(props: TrackingPeriodNewProps) {
    super(props);

    props.onCreateTrackingPeriod();
  }

  public handleOnSave = (trackingPeriod: TrackingPeriod) => (): void => {
    const { onSaveTrackingPeriod, history } = this.props;
    onSaveTrackingPeriod(trackingPeriod, history);
  };

  public render() {
    const { trackingPeriod } = this.props;

    return (
      <section>
        <Link to="/tracking-periods">Home</Link>

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
