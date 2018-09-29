import * as React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import TrackingPeriodList from '../tracking-period/tracking-period-list';
import TrackingPeriodNew from '../tracking-period/tracking-period-new';
import TrackingPeriodView from '../tracking-period/tracking-period-view';
import TransactionList from '../transaction/transaction-list';
import TransactionNew from '../transaction/transaction-new';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class App extends React.Component {
  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>
        <Link to="/tracking-period">Home</Link>

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
            path="/tracking-period/:id"
            component={TrackingPeriodView}
          />
          <Route exact={true} path="/transaction" component={TransactionList} />
          <Route
            exact={true}
            path="/transaction/new"
            component={TransactionNew}
          />
          <Route component={Oops} />
        </Switch>
      </section>
    );
  }
}
