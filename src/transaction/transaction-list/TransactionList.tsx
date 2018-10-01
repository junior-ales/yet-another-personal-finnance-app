import * as R from 'ramda';
import * as React from 'react';

import { TransactionListProps } from '.';
import { Transaction } from '../../shared/store';
import { formatNumber } from '../../shared/utils/formatNumber';

import './transactionList.css';

interface TransactionProps {
  transaction: Transaction;
  onClick: (transactionId: string) => void;
}

const categoriesMap = {
  'fixed-expense': 'gasto fixo',
  food: 'alimentacao',
  other: 'outros',
  transport: 'transporte'
};

const Transaction = (props: TransactionProps) => {
  const { onClick, transaction } = props;
  const handleOnClick = (id: string) => () => onClick(id);

  return (
    <li className="Transaction" onClick={handleOnClick(transaction.id)}>
      <section className="Transaction-content">
        <section className="Transaction-value">
          {formatNumber(transaction.value)}
        </section>
        <p className="Transaction-description">
          {transaction.description || '<Sem descricao>'}
        </p>
        <section className="Transaction-details">
          <p className="Transaction-date">
            {transaction.date.format('DD/MMM')}
          </p>
          <section className="Transaction-category">
            <span className="Transaction-categoryText">
              {categoriesMap[transaction.category]}
            </span>
          </section>
        </section>
      </section>
      <section className="Transaction-actions">
        <span className="Transaction-chevron">&#10093;</span>
      </section>
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
        {R.not(R.isEmpty(transactions)) && (
          <>
            <h2 className="TransactionList-title">Transacoes</h2>
            <ul className="TransactionList">
              {transactions.map(t => (
                <Transaction
                  key={t.id}
                  transaction={t}
                  onClick={this.handleSelectTransaction}
                />
              ))}
            </ul>
          </>
        )}
      </section>
    );
  }
}
