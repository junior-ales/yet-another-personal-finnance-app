import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, TrackingPeriod } from '../../shared/store';
import { selectTrackingPeriod } from './action';
import { allTrackingPeriods } from './selector';
import { TrackingPeriodList } from './TrackingPeriodList';

interface StateToProps {
  trackingPeriods: TrackingPeriod[];
}

interface DispatchToProps {
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
  onSelectTrackingPeriod: (trackingPeriodId: string, history: History) =>
    dispatch(selectTrackingPeriod(trackingPeriodId, history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackingPeriodList)
);
