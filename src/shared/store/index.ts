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
  startDate: Date;
  endDate: Date;
  initialBudget: number;
  plannedSavings: number;
}

// interface User {
//   id: string;
// }

export interface AppState {
  editing: {
    trackingPeriod: TrackingPeriod | null;
  };
  trackingPeriods: {
    byId: { [prop: string]: TrackingPeriod };
    allId: string[];
  };
  // transactions: {
  //   byId: { [prop: string]: Transaction };
  //   allId: string[];
  // };
  // user: User;
}

export const initialState: AppState = {
  editing: {
    trackingPeriod: null
  },
  trackingPeriods: { allId: [], byId: {} }
  // transactions: { allId: [], byId: {} },
  // user: { id: 'user1' }
};
