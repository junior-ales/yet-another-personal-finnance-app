import * as React from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import { AppState, initialState, TrackingPeriod } from '../shared/store';

interface AppProps {
  onCreateTrackingPeriod: () => void;
  trackingPeriods: TrackingPeriod[];
}

const Bla1 = () => <div>Eita Bla1</div>;
const Bla2 = () => <div>nada a ver bla2</div>;
const BlaDefault = () => <div>selection a bla</div>;

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
          Cria
        </button>
        <Link to="/1bla">Pro 1</Link>

        <Switch>
          <Route path="/1bla" component={Bla1} />
          <Route path="/2bla" component={Bla2} />
          <Route component={BlaDefault} />
        </Switch>

        <p>{JSON.stringify(this.props.trackingPeriods)}</p>
      </section>
    );
  }
}
