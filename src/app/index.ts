import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import { ActionsType } from '../shared/action';
import { AppState, TrackingPeriod } from '../shared/store';
import { createTrackingPeriod } from './action';
import { App } from './App';
import { allTrackingPeriods } from './selector';

interface StateToProps {
  trackingPeriods: TrackingPeriod[];
}

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriods: allTrackingPeriods(state)
});

interface DispatchToProps {
  onCreateTrackingPeriod: () => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: Dispatch<ActionsType>
) => ({
  onCreateTrackingPeriod: () => dispatch(createTrackingPeriod())
});

export default (withRouter as any)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
