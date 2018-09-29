import * as React from 'react';
import { Route } from 'react-router-dom';

import { TransactionViewProps } from '.';

const Oops = () => <h2>Ooops, something went wrong</h2>;

export class TransactionView extends React.Component<TransactionViewProps> {
  public render() {
    const { transaction } = this.props;

    return transaction ? (
      <section>
        <h2>Transaction Details</h2>
        {JSON.stringify(transaction)}
      </section>
    ) : (
      <Route component={Oops} />
    );
  }
}
