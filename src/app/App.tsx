import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import TrackingPeriodList from '../tracking-period/tracking-period-list';
import TrackingPeriodNew from '../tracking-period/tracking-period-new';
import TrackingPeriodView from '../tracking-period/tracking-period-view';
import TransactionList from '../transaction/transaction-list';
import TransactionNew from '../transaction/transaction-new';
import TransactionView from '../transaction/transaction-view';

import { Header } from './header/Header';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class App extends React.Component {
  public render() {
    return (
      <section>
        <Header />

        <Switch>
          <Redirect exact={true} from="/" to="/tracking-period" />
          <Route
            exact={true}
            path="/tracking-period"
            component={TrackingPeriodList}
          />
          <Route
            exact={true}
            path="/tracking-period/new"
            component={TrackingPeriodNew}
          />
          <Route
            exact={true}
            path="/tracking-period/:trackingPeriodId"
            component={TrackingPeriodView}
          />
          <Route
            exact={true}
            path="/tracking-period/:trackingPeriodId/transaction"
            component={TransactionList}
          />
          <Route
            exact={true}
            path="/tracking-period/:trackingPeriodId/transaction/new"
            component={TransactionNew}
          />
          <Route
            exact={true}
            path="/tracking-period/:trackingPeriodId/transaction/:transactionId"
            component={TransactionView}
          />
          <Route component={Oops} />
        </Switch>
      </section>
    );
  }
}
