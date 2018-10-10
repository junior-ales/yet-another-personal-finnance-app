import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { AppState, Transaction } from '../../shared/store';
import { ChartView } from './ChartView';

interface StateToProps {
  transactions: Transaction[];
}

export type ChartViewProps = StateToProps & RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  transactions: []
});

export default withRouter(connect(mapStateToProps)(ChartView));
