import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, TrackingPeriod } from '../../shared/store';
import { saveTrackingPeriod } from './action';
import { editingTrackingPeriod } from './selector';
import { TrackingPeriodNew } from './TrackingPeriodNew';

interface StateToProps {
  trackingPeriod: TrackingPeriod | null;
}

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriod: editingTrackingPeriod(state)
});

interface DispatchToProps {
  onSaveTrackingPeriod: (
    trackingPeriod: TrackingPeriod,
    history: History
  ) => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onSaveTrackingPeriod: (trackingPeriod, history) =>
    dispatch(saveTrackingPeriod(trackingPeriod, history))
});

export type TrackingPeriodNewProps = StateToProps &
  DispatchToProps &
  RouteComponentProps;

export default (withRouter as any)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackingPeriodNew)
);
