import * as R from 'ramda';
import * as React from 'react';

import { InlineSelectionRow } from 'src/shared/components/InlineSelectionRow';
import { TransactionListProps } from '.';
import { PageSubHeader } from '../../shared/components/PageSubHeader';
import { Transaction, TransactionCategories } from '../../shared/store';
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

const Transaction: React.SFC<TransactionProps> = props => {
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

interface TransactionListState {
  filter: 'all' | TransactionCategories;
}

type FilterOptions = TransactionListState['filter'];

export class TransactionList extends React.Component<
  TransactionListProps,
  TransactionListState
> {
  constructor(props: TransactionListProps) {
    super(props);

    this.state = { filter: 'all' };
  }

  public handleSelectTransaction = (transactionId: string): void => {
    this.props.onSelectTransaction(transactionId, this.props.history);
  };

  public onFilterChange = (value: FilterOptions) => () => {
    this.setState({ filter: value });
  };

  public filteredTransactions = (): Transaction[] =>
    this.state.filter === 'all'
      ? this.props.transactions
      : this.props.transactions.filter(t => t.category === this.state.filter);

  public render() {
    const { transactions } = this.props;

    return (
      <section>
        {R.not(R.isEmpty(transactions)) && (
          <>
            <PageSubHeader title="Transacoes" />

            <InlineSelectionRow<FilterOptions>
              className="TransactionList-filter"
              selectedValue={this.state.filter}
              handleOnClick={this.onFilterChange}
              choices={[
                { label: 'Gasto Fixo', value: 'fixed-expense' },
                { label: 'Alimentacao', value: 'food' },
                { label: 'Outros', value: 'other' },
                { label: 'Transporte', value: 'transport' },
                { label: 'Todas', value: 'all' }
              ]}
            />

            <ul className="TransactionList">
              {this.filteredTransactions().map(t => (
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
