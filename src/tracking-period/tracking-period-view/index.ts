import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppState, TrackingPeriod, Transaction } from '../../shared/store';
import {
  selectedTrackingPeriod,
  selectedTrackingPeriodTransactions
} from './selector';
import { TrackingPeriodView } from './TrackingPeriodView';

interface StateToProps {
  trackingPeriod: TrackingPeriod | null;
  transactions: Transaction[];
}

export type TrackingPeriodViewProps = StateToProps & RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriod: selectedTrackingPeriod(state),
  transactions: selectedTrackingPeriodTransactions(state)
});

export default (withRouter as any)(
  connect(mapStateToProps)(TrackingPeriodView)
);
