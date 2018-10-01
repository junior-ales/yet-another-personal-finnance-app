import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, Transaction } from '../../shared/store';
import { selectTransaction } from './action';
import { allTransactions, transactionsByTrackingPeriodId } from './selector';
import { TransactionList } from './TransactionList';

interface OwnProps {
  transactions?: Transaction[];
  trackingPeriodId?: string;
}

interface StateToProps {
  transactions: Transaction[];
}

interface DispatchToProps {
  onSelectTransaction: (transactionId: string, history: History) => void;
}

export type TransactionListProps = OwnProps &
  StateToProps &
  DispatchToProps &
  RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, OwnProps, AppState> = (
  state,
  { trackingPeriodId, transactions }
) => ({
  transactions:
    transactions ||
    (trackingPeriodId
      ? transactionsByTrackingPeriodId(trackingPeriodId, state)
      : allTransactions(state))
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, OwnProps> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onSelectTransaction: (transactionId: string, history: History) =>
    dispatch(selectTransaction(transactionId, history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransactionList)
);
