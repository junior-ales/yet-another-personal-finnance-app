import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import TrackingPeriodList from '../tracking-period/tracking-period-list';
import TrackingPeriodNew from '../tracking-period/tracking-period-new';
import TrackingPeriodView from '../tracking-period/tracking-period-view';
import TransactionNew from '../transaction/transaction-new';
import TransactionView from '../transaction/transaction-view';

import { InternalServerError } from '../shared/components/InternalServerError';
import { RouteNotFound } from '../shared/components/RouteNotFound';
import { ErrorBoundary } from './ErrorBoundary';
import { MainHeader } from './MainHeader';

export class App extends React.Component {
  public render() {
    return (
      <ErrorBoundary>
        <MainHeader />
        <Switch>
          <Redirect exact={true} from="/" to="/tracking-period" />
          <Route path="/error" component={InternalServerError} />
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
            path="/tracking-period/:trackingPeriodId/transaction/new"
            component={TransactionNew}
          />
          <Route
            exact={true}
            path="/tracking-period/:trackingPeriodId/transaction/:transactionId"
            component={TransactionView}
          />
          <Route component={RouteNotFound} />
        </Switch>
      </ErrorBoundary>
    );
  }
}
