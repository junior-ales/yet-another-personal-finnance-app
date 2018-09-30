import * as React from 'react';
import { Link } from 'react-router-dom';

import './mainHeader.css';

export class MainHeader extends React.Component {
  public render() {
    return (
      <header>
        <h1 className="MainHeader">
          <Link to="/tracking-period" className="MainHeader-link">
            Financeiro
          </Link>
        </h1>
      </header>
    );
  }
}
