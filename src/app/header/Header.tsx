import * as React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export class MainHeader extends React.Component {
  public render() {
    return (
      <header>
        <section className="MainHeader">
          <Link to="/tracking-period" className="MainHeader-link">
            Financeiro
          </Link>
        </section>
      </header>
    );
  }
}
