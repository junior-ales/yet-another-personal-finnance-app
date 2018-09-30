import * as R from 'ramda';
import * as React from 'react';

import { TrackingPeriodListProps } from '.';
import { ButtonLink } from '../../shared/components/ButtonLink';
import { PageHeader } from '../../shared/components/PageHeader';
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
  const handleOnClick = (tpId: string) => () => props.onClick(tpId);
  const {
    id,
    startDate,
    endDate,
    initialBudget,
    plannedSavings
  } = props.trackingPeriod;

  return (
    <li className="TrackingPeriod" onClick={handleOnClick(id)}>
      <section className="TrackingPeriod-content">
        <header>
          <h1 className="TrackingPeriod-header">
            {startDate.format('DD/MMM')} &#10141; {endDate.format('DD/MMM')}
          </h1>
        </header>
        <section>
          <span className="TrackingPeriod-details">
            <span className="TrackingPeriod-label">Total</span>
            <span className="TrackingPeriod-value">£{initialBudget}</span>
          </span>
          <span className="TrackingPeriod-details">
            <span className="TrackingPeriod-label">Planejado</span>
            <span className="TrackingPeriod-value">£{plannedSavings}</span>
          </span>
          <span className="TrackingPeriod-details">
            <span className="TrackingPeriod-label">Poupado</span>
            <span className="TrackingPeriod-value">£{plannedSavings}</span>
          </span>
        </section>
      </section>
      <section className="TrackingPeriod-actions">
        <span className="TrackingPeriod-chevron">&#10093;</span>
      </section>
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
        <PageHeader title="Periodos" />

        <section>
          {R.isEmpty(trackingPeriods) ? (
            <EmptyTrackingPeriods />
          ) : (
            <ul className="TrackingPeriods">
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
