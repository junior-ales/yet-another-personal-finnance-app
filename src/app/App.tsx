import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import TrackingPeriodList from '../tracking-period/tracking-period-list';
import TrackingPeriodNew from '../tracking-period/tracking-period-new';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class App extends React.Component {
  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>

        <Switch>
          <Redirect exact={true} from="/" to="/tracking-periods" />
          <Route
            exact={true}
            path="/tracking-periods"
            component={TrackingPeriodList}
          />
          <Route path="/tracking-periods/new" component={TrackingPeriodNew} />
          <Route component={Oops} />
        </Switch>
      </section>
    );
  }
}
