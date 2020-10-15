import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { configureStore } from "@/redux-store/createStore";

import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import themes from "./themes";
const { store, persistor } = configureStore();
import "./i18n";

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={themes}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

declare let module: Record<string, unknown>;
export default hot(module)(App);
