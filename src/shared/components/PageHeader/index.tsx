import * as React from 'react';

import './pageHeader.css';

interface PageHeaderProps {
  title?: string;
}

export const PageHeader: React.SFC<PageHeaderProps> = props => (
  <header className="PageHeader">
    <h1 className="PageHeader-content">
      {props.title ? props.title : props.children}
    </h1>
  </header>
);
