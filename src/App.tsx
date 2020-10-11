import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { configureStore } from "@/redux-store/createStore";

import { PersistGate } from "redux-persist/integration/react";

// import { CssBaseline } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
// import { FavoriteProvider } from "./store/favorite/useHook.js";
// import theme from './themes';
// import SnackbarCustom from '@/components/SnackbarCustom';
const { store, persistor } = configureStore();

function App() {
  return (
    <Router>
      {/* <CssBaseline /> */}
      {/* <ThemeProvider theme={theme}> */}
      <Provider store={store}>
        {/* <FavoriteProvider> */}
        {/* <SnackbarCustom /> */}
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
        {/* </FavoriteProvider> */}
      </Provider>
      {/* </ThemeProvider> */}
    </Router>
  );
}

declare let module: Record<string, unknown>;
export default hot(module)(App);
