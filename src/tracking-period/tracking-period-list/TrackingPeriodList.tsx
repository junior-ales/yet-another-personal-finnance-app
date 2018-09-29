import * as R from 'ramda';
import * as React from 'react';

import { TrackingPeriodListProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { TrackingPeriod } from '../../shared/store';

import './trackingPeriodList.css';

const EmptyTrackingPeriods = () => (
  <section className="EmptyTrackingPeriods">
    <p className="EmptyTrackingPeriods-content">
      Comece a organizar sua vida financeira criando um periodo
    </p>
  </section>
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
        <header className="TrackingPeriodsHeader">
          <h1 className="TrackingPeriodsHeader-content">Periodos</h1>
        </header>

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

          <ButtonLink to="/tracking-period/new" label="Criar Periodo" />
        </section>
      </section>
    );
  }
}
