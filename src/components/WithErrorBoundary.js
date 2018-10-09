import React, { PureComponent } from 'react';

export default function (Component) {
  return class extends PureComponent {
    constructor() {
      super();
      this.state = { hasError: false };
    }

    componentDidCatch() {
      this.setState({ hasError: true });
    }

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return (
          <h1>
            Something went wrong. Please refresh your browser.
          </h1>
        );
      }
      return (
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  };
}
