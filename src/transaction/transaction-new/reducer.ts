import { Reducer } from 'redux';

import { ActionKeys, ActionsType } from '../../shared/action';
import { AppState } from '../../shared/store';

type AllIdState = AppState['transactions']['allId'];
export const transactionsAllId: Reducer<AllIdState, ActionsType> = (
  state = [],
  action
) => {
  if (action.type === ActionKeys.SAVE_TRANSACTION) {
    return [...state, action.payload.id];
  }

  return state;
};

type ByIdState = AppState['transactions']['byId'];
export const transactionsById: Reducer<ByIdState, ActionsType> = (
  state = {},
  action
) => {
  if (action.type === ActionKeys.SAVE_TRANSACTION) {
    return { ...state, [action.payload.id]: action.payload };
  }

  return state;
};

type ByTrackingPeriodState = AppState['transactions']['byTrackingPeriod'];
export const transactionsByTrackingPeriod: Reducer<
  ByTrackingPeriodState,
  ActionsType
> = (state = {}, action) => {
  if (action.type === ActionKeys.SAVE_TRANSACTION) {
    const { id, trackingPeriodId } = action.payload;

    const idsByTranckingPeriod = state[trackingPeriodId] || [];

    return {
      ...state,
      [trackingPeriodId]: [...idsByTranckingPeriod, id]
    };
  }

  return state;
};
