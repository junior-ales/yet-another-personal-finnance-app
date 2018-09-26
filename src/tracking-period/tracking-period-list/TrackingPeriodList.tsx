import * as R from 'ramda';
import * as React from 'react';

import { TrackingPeriodListProps } from '.';
import { TrackingPeriod } from '../../shared/store';

const EmptyTrackingPeriods = () => (
  <h2>Comece a organizar sua vida financeira clicando em Inicio</h2>
);

interface TrackingPeriodProps {
  trackingPeriod: TrackingPeriod;
}

const TrackingPeriod = ({ trackingPeriod }: TrackingPeriodProps) => (
  <li>
    Period: {trackingPeriod.id} {trackingPeriod.startDate.toDateString()}
  </li>
);

export class TrackingPeriodList extends React.Component<
  TrackingPeriodListProps
> {
  public handleCreateTrackingPeriod = (): void => {
    this.props.onCreateTrackingPeriod(this.props.history);
  };

  public render() {
    const { trackingPeriods } = this.props;

    return (
      <section>
        <section>
          {R.isEmpty(trackingPeriods) ? (
            <EmptyTrackingPeriods />
          ) : (
            <ul>
              {trackingPeriods.map(t => (
                <TrackingPeriod key={t.id} trackingPeriod={t} />
              ))}
            </ul>
          )}

          <button type="button" onClick={this.handleCreateTrackingPeriod}>
            Inicio
          </button>
        </section>
      </section>
    );
  }
}
