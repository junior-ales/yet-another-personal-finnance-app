import * as R from 'ramda';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { TransactionListProps } from '.';
import { Transaction } from '../../shared/store';

interface TransactionProps {
  transaction: Transaction;
  onClick: (transactionId: string) => void;
}

const Transaction = (props: TransactionProps) => {
  const { onClick, transaction } = props;
  const handleOnClick = (id: string) => () => onClick(id);

  return (
    <li onClick={handleOnClick(transaction.id)}>
      Transaction: {transaction.id}
    </li>
  );
};

export class TransactionList extends React.Component<TransactionListProps> {
  public handleSelectTransaction = (transactionId: string): void => {
    this.props.onSelectTransaction(transactionId, this.props.history);
  };

  public render() {
    const { transactions } = this.props;

    return (
      <section>
        <header>Transactions</header>

        <section>
          {R.not(R.isEmpty(transactions)) && (
            <ul>
              {transactions.map(t => (
                <Transaction
                  key={t.id}
                  transaction={t}
                  onClick={this.handleSelectTransaction}
                />
              ))}
            </ul>
          )}

          <Link to="/transaction/new">New Transaction</Link>
        </section>
      </section>
    );
  }
}
