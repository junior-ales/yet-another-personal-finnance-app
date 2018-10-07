import * as R from 'ramda';
import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type AllIdState = AppState['transactions']['allId'];
export const transactionsAllId: Reducer<AllIdState, ActionsType> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ActionKeys.SAVE_TRANSACTION:
      return [...state, action.payload.id];

    case ActionKeys.DELETE_TRANSACTION:
      return state.filter(transactionId => transactionId !== action.payload.id);

    default:
      return state;
  }
};

type ByIdState = AppState['transactions']['byId'];
export const transactionsById: Reducer<ByIdState, ActionsType> = (
  state = {},
  action
) => {
  switch (action.type) {
    case ActionKeys.SAVE_TRANSACTION:
      return { ...state, [action.payload.id]: action.payload };

    case ActionKeys.DELETE_TRANSACTION:
      return R.dissoc(action.payload.id, state);

    default:
      return state;
  }
};

type ByTrackingPeriodState = AppState['transactions']['byTrackingPeriod'];
export const transactionsByTrackingPeriod: Reducer<
  ByTrackingPeriodState,
  ActionsType
> = (state = {}, action) => {
  switch (action.type) {
    case ActionKeys.SAVE_TRANSACTION: {
      const { id, trackingPeriodId } = action.payload;

      const idsByTranckingPeriod = state[trackingPeriodId] || [];

      return {
        ...state,
        [trackingPeriodId]: [...idsByTranckingPeriod, id]
      };
    }

    case ActionKeys.DELETE_TRANSACTION: {
      const { trackingPeriodId } = action.payload;
      const idsByTranckingPeriod = state[action.payload.trackingPeriodId] || [];

      return {
        ...state,
        [trackingPeriodId]: idsByTranckingPeriod.filter(
          id => id !== action.payload.id
        )
      };
    }

    default:
      return state;
  }
};
