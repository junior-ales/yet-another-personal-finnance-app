import * as React from 'react';
import { Link } from 'react-router-dom';

import './internalServerError.css';

export const InternalServerError: React.SFC<{}> = () => (
  <section className="InternalServerError">
    <h1>Ooops, estamos com problemas tecnicos.</h1>
    <p>
      Por favor, volte mais tarde ou tente ir para{' '}
      <Link to="/">pagina inicial</Link>.
    </p>
  </section>
);
