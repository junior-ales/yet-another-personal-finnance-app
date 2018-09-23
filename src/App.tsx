import * as React from 'react';

interface Transaction {
  id: string;
  trackingPeriodId: string;
  type: 'credit' | 'debit';
  value: number;
  date: Date;
  category: 'transport' | 'food' | 'other';
  description: string;
}

interface TrackingPeriod {
  id: string;
  startDate: Date;
  endDate: Date;
  initialBudget: number;
  plannedSavings: number;
}

interface User {
  id: string;
}

interface AppState {
  user: User;
  trackingPeriods: {
    byId: { [prop: string]: TrackingPeriod };
    allId: string[];
  };
  transactions: {
    byId: { [prop: string]: Transaction };
    allId: string[];
  };
}

const initialState: AppState = {
  trackingPeriods: { allId: [], byId: {} },
  transactions: { allId: [], byId: {} },
  user: { id: 'user1' }
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
  }

  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>

        <section>
          <h2>Clique em inicio para comecar a organizar sua vida financeira</h2>
        </section>

        <button type="button">Inicio</button>

        <p>{JSON.stringify(this.state)}</p>
      </section>
    );
  }
}

export default App;
