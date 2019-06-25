import { Provider } from "mobx-react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import store from "./mobx/stores/store";

export default function RenderComponents() {
  return (
    <Provider {...store}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </Provider>
  );
}
