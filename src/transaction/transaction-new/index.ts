import { History } from 'history';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { AppState, Transaction } from '../../shared/store';
import { saveTransaction } from './action';
import { selectedTrackingPeriodId } from './selector';
import { TransactionNew } from './TransactionNew';

interface StateToProps {
  trackingPeriodSelected: string;
}

interface DispatchToProps {
  onSaveTransaction: (transaction: Transaction, history: History) => void;
}

export type TransactionNewProps = StateToProps &
  DispatchToProps &
  RouteComponentProps;

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriodSelected: selectedTrackingPeriodId(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onSaveTransaction: (transaction, history) =>
    dispatch(saveTransaction(transaction, history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransactionNew)
);
