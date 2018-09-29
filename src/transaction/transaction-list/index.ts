import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, Transaction } from '../../shared/store';
import { selectTransaction } from './action';
import { allTransactions } from './selector';
import { TransactionList } from './TransactionList';

interface StateToProps {
  transactions: Transaction[];
}

interface DispatchToProps {
  onSelectTransaction: (transactionId: string, history: History) => void;
}

export type TransactionListProps = StateToProps &
  DispatchToProps &
  RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  transactions: allTransactions(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onSelectTransaction: (transactionId: string, history: History) =>
    dispatch(selectTransaction(transactionId, history))
});

export default (withRouter as any)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransactionList)
);
