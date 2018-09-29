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
  onClick: (trackingPeriodId: string) => void;
}

const TrackingPeriod = (props: TrackingPeriodProps) => {
  const { onClick, trackingPeriod } = props;
  const handleOnClick = (id: string) => () => onClick(id);

  return (
    <li onClick={handleOnClick(trackingPeriod.id)}>
      Period: {trackingPeriod.id}
    </li>
  );
};

export class TrackingPeriodList extends React.Component<
  TrackingPeriodListProps
> {
  public handleSelectTrackingPeriod = (trackingPeriodId: string): void => {
    this.props.onSelectTrackingPeriod(trackingPeriodId, this.props.history);
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
                <TrackingPeriod
                  key={t.id}
                  trackingPeriod={t}
                  onClick={this.handleSelectTrackingPeriod}
                />
              ))}
            </ul>
          )}

          <Link to="/tracking-periods/new">Inicio</Link>
        </section>
      </section>
    );
  }
}
