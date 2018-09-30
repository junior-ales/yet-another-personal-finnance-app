import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  public state = {
    hasError: false
  };

  public componentDidCatch() {
    this.setState({ hasError: true });
  }

  public render() {
    return this.state.hasError ? <Redirect to="/error" /> : this.props.children;
  }
}
