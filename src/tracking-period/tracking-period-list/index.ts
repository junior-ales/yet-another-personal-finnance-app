import { connect, MapStateToProps } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppState, TrackingPeriod } from '../../shared/store';
import { allTrackingPeriods } from './selector';
import { TrackingPeriodList } from './TrackingPeriodList';

interface StateToProps {
  trackingPeriods: TrackingPeriod[];
}

export type TrackingPeriodListProps = StateToProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriods: allTrackingPeriods(state)
});

export default (withRouter as any)(
  connect(mapStateToProps)(TrackingPeriodList)
);
