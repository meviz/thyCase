import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { jss, ThemeProvider } from "react-jss";
import { theme } from "./utils/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

jss.setup({ insertionPoint: document.getElementById("root")! });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
