import * as React from 'react';

import { ButtonLink } from 'src/shared/components/ButtonLink';
import { ButtonsGroup } from 'src/shared/components/ButtonsGroup';
import { PageHeader } from 'src/shared/components/PageHeader';
import { formatNumber } from 'src/shared/utils/formatNumber';
import {
  aggregateTransactionsValue,
  onlyDebit
} from 'src/transaction/transactions';
import { ChartViewProps } from '.';

export class ChartView extends React.Component<ChartViewProps> {
  public render() {
    const debits = Math.abs(
      aggregateTransactionsValue(onlyDebit(this.props.transactions))
    );
    const { trackingPeriodId } = this.props.match.params;

    return (
      <section>
        <PageHeader title="Despesas" />
        <div>
          <span>total</span>
          <span>{formatNumber(debits)}</span>
        </div>

        <ButtonsGroup>
          <ButtonLink
            to={`/tracking-period/${trackingPeriodId}`}
            secondary={true}
            label="Voltar"
          />
        </ButtonsGroup>
      </section>
    );
  }
}
