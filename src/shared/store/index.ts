import { Moment } from 'moment';

// interface Transaction {
//   id: string;
//   trackingPeriodId: string;
//   type: 'credit' | 'debit';
//   value: number;
//   date: Date;
//   category: 'transport' | 'food' | 'other';
//   description: string;
// }

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
  trackingPeriods: { allId: [], byId: {}, selected: null }
  // transactions: { allId: [], byId: {} },
  // user: { id: 'user1' }
};
