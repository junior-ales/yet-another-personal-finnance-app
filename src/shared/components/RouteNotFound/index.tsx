import * as React from 'react';
import { Link } from 'react-router-dom';

export const RouteNotFound: React.SFC<{}> = () => (
  <section>
    <h1>Ooops, pagina nao encontrada</h1>
    <p>
      Voltar para <Link to="/">pagina inicial</Link>.
    </p>
  </section>
);
