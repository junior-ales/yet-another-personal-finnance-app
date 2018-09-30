import * as React from 'react';
import { Route } from 'react-router-dom';

import { TransactionViewProps } from '.';
import { RouteNotFound } from '../../shared/components/RouteNotFound';

export class TransactionView extends React.Component<TransactionViewProps> {
  public render() {
    const { transaction } = this.props;

    return transaction ? (
      <section>
        <h2>Transaction Details</h2>
        {JSON.stringify(transaction)}
      </section>
    ) : (
      <Route component={RouteNotFound} />
    );
  }
}
