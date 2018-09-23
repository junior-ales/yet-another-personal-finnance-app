import * as R from 'ramda';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { TrackingPeriodListProps } from '.';
import { TrackingPeriod } from '../../shared/store';

const EmptyTrackingPeriods = () => (
  <h2>Comece a organizar sua vida financeira clicando em Inicio</h2>
);

interface TrackingPeriodProps {
  trackingPeriod: TrackingPeriod;
}

const TrackingPeriod = ({ trackingPeriod }: TrackingPeriodProps) => (
  <li>Period: {trackingPeriod.startDate}</li>
);

export class TrackingPeriodList extends React.Component<
  TrackingPeriodListProps
> {
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

          <Link to="/tracking-periods/new">Inicio</Link>
        </section>
      </section>
    );
  }
}
