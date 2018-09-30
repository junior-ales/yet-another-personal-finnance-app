import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AppState, Transaction } from '../../shared/store';
import { selectedTransaction } from './selector';
import { TransactionView } from './TransactionView';

interface StateToProps {
  transaction: Transaction | null;
}

export type TransactionViewProps = StateToProps & RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  transaction: selectedTransaction(state)
});

export default withRouter(connect(mapStateToProps)(TransactionView));
