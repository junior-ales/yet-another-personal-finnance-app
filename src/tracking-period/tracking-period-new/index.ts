import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { ActionsType } from '../../shared/action';
import { AppState, TrackingPeriod } from '../../shared/store';
import { createTrackingPeriod } from './action';
import { editingTrackingPeriod } from './selector';
import { TrackingPeriodNew } from './TrackingPeriodNew';

interface StateToProps {
  trackingPeriod: TrackingPeriod | null;
}

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriod: editingTrackingPeriod(state)
});

interface DispatchToProps {
  onCreateTrackingPeriod: () => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: Dispatch<ActionsType>
) => ({
  onCreateTrackingPeriod: () => dispatch(createTrackingPeriod())
});

export type TrackingPeriodNewProps = StateToProps & DispatchToProps;

export default (withRouter as any)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackingPeriodNew)
);
