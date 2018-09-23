import * as React from 'react';

import { AppState, initialState, TrackingPeriod } from '../shared/store';

interface AppProps {
  onCreateTrackingPeriod: () => void;
  trackingPeriods: TrackingPeriod[];
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = initialState;
  }

  public createTrackingPeriod = () => {
    this.props.onCreateTrackingPeriod();
  };

  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>

        <section>
          <h2>Clique em inicio para comecar a organizar sua vida financeira</h2>
        </section>

        <button type="button" onClick={this.createTrackingPeriod}>
          Inicio
        </button>

        <p>{JSON.stringify(this.props.trackingPeriods)}</p>
      </section>
    );
  }
}
