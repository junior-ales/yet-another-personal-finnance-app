import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, Transaction } from '../../shared/store';
import { deleteTransaction } from './action';
import { selectedTransaction } from './selector';
import { TransactionView } from './TransactionView';

interface StateToProps {
  transaction: Transaction | null;
}

interface DispatchToProps {
  onDeleteTransaction: (transaction: Transaction, history: History) => void;
}

export type TransactionViewProps = StateToProps &
  DispatchToProps &
  RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  transaction: selectedTransaction(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onDeleteTransaction: (transanction: Transaction, history: History) =>
    dispatch(deleteTransaction(transanction, history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransactionView)
);
