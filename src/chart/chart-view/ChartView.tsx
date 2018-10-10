import * as R from 'ramda';
import * as React from 'react';

import { ChartViewProps } from '.';

export class ChartView extends React.Component<ChartViewProps> {
  public render() {
    return (
      <section>
        There will be a new component here
        <div>params: {R.toString(this.props.match.params)}</div>
      </section>
    );
  }
}
