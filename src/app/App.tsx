import * as React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import TrackingPeriodList from '../tracking-period/tracking-period-list';
import TrackingPeriodNew from '../tracking-period/tracking-period-new';
import TrackingPeriodView from '../tracking-period/tracking-period-view';
import TransactionList from '../transaction/transaction-list';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class App extends React.Component {
  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>
        <Link to="/tracking-periods">Home</Link>

        <Switch>
          <Redirect exact={true} from="/" to="/tracking-periods" />
          <Route
            exact={true}
            path="/tracking-periods"
            component={TrackingPeriodList}
          />
          <Route
            exact={true}
            path="/tracking-periods/new"
            component={TrackingPeriodNew}
          />
          <Route
            exact={true}
            path="/tracking-periods/:id"
            component={TrackingPeriodView}
          />
          <Route
            exact={true}
            path="/transactions"
            component={TransactionList}
          />
          <Route component={Oops} />
        </Switch>
      </section>
    );
  }
}
