import * as React from 'react';

import { Input } from './shared/components/input';
import { Label } from './shared/components/label';

import './App.css';

interface AppState {
  inputValue: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = { inputValue: '' };
  }

  public handleOnChange = (val: string): void => {
    this.setState({ inputValue: val });
  };

  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>
        <div>
          <Label htmlFor="initial-budget" value="Orcamento Mensal Inicial" />
          <Input
            id="initial-budget"
            type="number"
            value={this.state.inputValue}
            onChange={this.handleOnChange}
          />
        </div>
        <p>{this.state.inputValue}</p>
      </section>
    );
  }
}

export default App;
