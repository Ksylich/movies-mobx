import { Provider } from "mobx-react";
import React from "react";

import { RootLoh } from "./fetures/RootLoh";
import { store } from "./mobx/stores/store";

const App: React.FC = () => {
  return (
    <Provider {...store}>
      <RootLoh />
    </Provider>
  );
};

export default App;
