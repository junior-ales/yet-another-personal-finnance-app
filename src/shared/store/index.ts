import { Moment } from 'moment';

type TransactionCategories = 'transport' | 'food' | 'other';

export interface Transaction {
  id: string;
  trackingPeriodId: string;
  type: 'credit' | 'debit';
  value: number;
  date: Moment;
  category: TransactionCategories;
  description: string;
}

export interface TrackingPeriod {
  id: string;
  startDate: Moment;
  endDate: Moment;
  initialBudget: number;
  plannedSavings: number;
}

// interface User {
//   id: string;
// }

export interface AppState {
  transactions: {
    // allId: string[];
    // byId: { [prop: string]: Transaction };
    selected: string | null;
  };
  trackingPeriods: {
    allId: string[];
    byId: { [prop: string]: TrackingPeriod };
    selected: string | null;
  };
  // transactions: {
  //   byId: { [prop: string]: Transaction };
  //   allId: string[];
  // };
  // user: User;
}

export const initialState: AppState = {
  trackingPeriods: { allId: [], byId: {}, selected: null },
  // transactions: { allId: [], byId: {}, selected: null }
  transactions: { selected: null }
  // user: { id: 'user1' }
};
