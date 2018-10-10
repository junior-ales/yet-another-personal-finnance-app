import * as R from 'ramda';
import * as React from 'react';
import {
  DiscreteColorLegend,
  PropsRadialChartData,
  RadialChart
} from 'react-vis';

import { Transaction, TransactionCategories } from '../../shared/store';
import { formatNumber } from '../../shared/utils/formatNumber';
import {
  aggregateTransactionsValue,
  onlyDebit
} from '../../transaction/transactions';

import './spendingChart.css';

interface SpendingChartProps {
  dataValue: Transaction[];
}

const byCategory = R.groupBy((t: Transaction) => t.category);

const labelMap: Record<TransactionCategories, string> = {
  'fixed-expense': 'Gastos Fixos',
  food: 'Alimentacao',
  other: 'Outros',
  transport: 'Transporte'
};

const mapTransactionDetailsToChartData = (
  tRecord: Record<TransactionCategories, number>
): PropsRadialChartData[] =>
  Object.entries(tRecord).map(([category, value]) => ({
    angle: Math.abs(value),
    label: labelMap[category],
    subLabel: formatNumber(Math.abs(value))
  }));

const colorsByListSize = {
  1: ['#79C7E3'],
  2: ['#79C7E3', '#12939A'],
  3: ['#79C7E3', '#1A3177', '#12939A'],
  4: ['#79C7E3', '#FF9833', '#1A3177', '#12939A']
};

const addColor = (dataList: PropsRadialChartData[]): PropsRadialChartData[] => {
  const colorRange: string[] = colorsByListSize[dataList.length];

  return R.sortBy(R.prop('angle'), dataList).map((data, index) => ({
    ...data,
    style: { color: colorRange[index] }
  }));
};

const fromDataValuesToChartData: (
  ts: Transaction[]
) => PropsRadialChartData[] = R.compose(
  addColor,
  mapTransactionDetailsToChartData,
  txByCategory => R.map(aggregateTransactionsValue, txByCategory),
  byCategory,
  onlyDebit
);

export default class SpendingChart extends React.Component<SpendingChartProps> {
  public render() {
    const parsedData = fromDataValuesToChartData(this.props.dataValue);

    return (
      R.not(R.isEmpty(parsedData)) && (
        <section className="SpendingChart">
          <RadialChart
            className="SpendingChart-chart"
            innerRadius={50}
            radius={70}
            data={parsedData}
            width={200}
            height={200}
            padAngle={0.04}
            getLabel={R.always('')}
            showLabels={true}
          />
          <DiscreteColorLegend
            className="SpendingChart-legend"
            orientation="vertical"
            items={parsedData.map(d => ({
              color: R.pathOr<string, string>('', ['style', 'color'], d),
              disabled: false,
              title: d.label || ''
            }))}
          />
        </section>
      )
    );
  }
}
