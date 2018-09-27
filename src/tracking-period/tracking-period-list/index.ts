import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, TrackingPeriod } from '../../shared/store';
import { createTrackingPeriod, selectTrackingPeriod } from './action';
import { allTrackingPeriods } from './selector';
import { TrackingPeriodList } from './TrackingPeriodList';

interface StateToProps {
  trackingPeriods: TrackingPeriod[];
}

interface DispatchToProps {
  onCreateTrackingPeriod: (history: History) => void;
  onSelectTrackingPeriod: (trackingPeriodId: string, history: History) => void;
}

export type TrackingPeriodListProps = StateToProps &
  DispatchToProps &
  RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriods: allTrackingPeriods(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onCreateTrackingPeriod: (history: History) =>
    dispatch(createTrackingPeriod(history)),
  onSelectTrackingPeriod: (trackingPeriodId: string, history: History) =>
    dispatch(selectTrackingPeriod(trackingPeriodId, history))
});

export default (withRouter as any)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackingPeriodList)
);
