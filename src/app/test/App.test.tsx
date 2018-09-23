import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const fakeHandler = () => void 0;

  ReactDOM.render(
    <App onCreateTrackingPeriod={fakeHandler} trackingPeriods={[]} />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
