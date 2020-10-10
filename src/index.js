/* eslint-disable react/no-render-return-value */
import * as React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import App from "./App";

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
