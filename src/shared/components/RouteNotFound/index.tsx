import * as React from 'react';
import { Link } from 'react-router-dom';

import './routeNotFound.css';

export const RouteNotFound: React.SFC<{}> = () => (
  <section className="RouteNotFound">
    <h1>Ooops, pagina nao encontrada</h1>
    <p>
      Voltar para <Link to="/">pagina inicial</Link>.
    </p>
  </section>
);
