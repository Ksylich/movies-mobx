import React, { Component } from "react";

import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {

public state = {
    hasError: false,
  };

  public componentDidCatch() {
    this.setState({ hasError: true });
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <ErrorIndicator /> : children;
  }
}
