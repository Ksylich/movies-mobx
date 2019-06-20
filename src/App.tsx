import { Provider } from "mobx-react";
import React from "react";

import "./App.css";
import { RootLoh } from "./fetures/RootLoh";
import { store } from "./stores/store";

const App: React.FC = () => {
  return (
    <Provider {...store}>
      <RootLoh />
    </Provider>
  );
};

export default App;
