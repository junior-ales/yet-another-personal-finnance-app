import { Moment } from 'moment';

type TransactionId = string;
type TrackingPeriodId = string;
export type TransactionTypes = 'credit' | 'debit';
export type TransactionCategories =
  | 'transport'
  | 'food'
  | 'fixed-expense'
  | 'other';

export interface Transaction {
  id: TransactionId;
  trackingPeriodId: TrackingPeriodId;
  type: TransactionTypes;
  value: number;
  date: Moment;
  category: TransactionCategories;
  description: string;
}

export interface TrackingPeriod {
  id: TrackingPeriodId;
  startDate: Moment;
  endDate: Moment;
  initialBudget: number;
  plannedSavings: number;
}

// interface User {
//   id: string;
// }

export interface AppState {
  trackingPeriods: {
    allId: TrackingPeriodId[];
    byId: { [trackingPeriodId: string]: TrackingPeriod };
    selected: TrackingPeriodId | null;
  };
  transactions: {
    allId: TransactionId[];
    byId: { [transactionId: string]: Transaction };
    byTrackingPeriod: { [trackingPeriodId: string]: TransactionId[] };
    selected: TransactionId | null;
  };
  // user: User;
}

export const initialState: AppState = {
  trackingPeriods: { allId: [], byId: {}, selected: null },
  transactions: { allId: [], byId: {}, byTrackingPeriod: {}, selected: null }
  // user: { id: 'user1' }
};
