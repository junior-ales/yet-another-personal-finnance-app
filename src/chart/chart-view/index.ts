import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { AppState, Transaction } from '../../shared/store';
import { transactionsByTrackingPeriodId } from '../../transaction/transaction-list/selector';
import { ChartView } from './ChartView';

interface StateToProps {
  transactions: Transaction[];
}

type OwnProps = RouteComponentProps<{ trackingPeriodId: string }>;

export type ChartViewProps = StateToProps & OwnProps;

const mapStateToProps: MapStateToProps<StateToProps, OwnProps, AppState> = (
  state,
  props
) => {
  const { trackingPeriodId } = props.match.params;

  return {
    transactions: transactionsByTrackingPeriodId(trackingPeriodId, state)
  };
};

export default withRouter(connect(mapStateToProps)(ChartView));
