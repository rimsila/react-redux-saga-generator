import * as React from "react";

import App from "./App";
import { render } from "react-dom";

const rootEl = document.getElementById("root");

render(
  <>
    <React.Suspense fallback={null}>
      <App />
    </React.Suspense>
  </>,
  rootEl,
);
