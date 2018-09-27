import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppState, TrackingPeriod } from '../../shared/store';
import { selectedTrackingPeriod } from './selector';
import { TrackingPeriodView } from './TrackingPeriodView';

interface StateToProps {
  trackingPeriod: TrackingPeriod | null;
}

export type TrackingPeriodViewProps = StateToProps & RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriod: selectedTrackingPeriod(state)
});

export default (withRouter as any)(
  connect(mapStateToProps)(TrackingPeriodView)
);
