import * as React from 'react';

import './pageSubHeader.css';

interface PageSubHeaderProps {
  title?: string;
}

export const PageSubHeader: React.SFC<PageSubHeaderProps> = props => (
  <section className="PageSubHeader">
    <h2 className="PageSubHeader-content">
      {props.title ? props.title : props.children}
    </h2>
  </section>
);
