/* eslint-disable func-names */
/* eslint-disable no-extend-native */
import "moment/locale/pt-br";
import "moment/locale/en-gb";
import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import { unregister } from "./serviceWorker";
import { Provider as ReduxStoreProvider } from "react-redux";
import { applyMiddleware } from "redux";
import { reducer, initialState } from "./redux/rootReducer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { I18nextProvider } from "react-i18next";
import i18next from "./lib/i18next";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import createSagaMiddleware from "redux-saga";
import moment from "moment";
import store from "./store";
import rootSaga from "./redux/rootSaga";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    if (!this?.length) {
      throw new Error("Cannot read property of null or undefined");
    }
    const res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(callback(this[i], i, this));
    }
    return res;
  };
}

if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, "reduce", {
    value(callback: any, initial: any) {
      let initialValue = initial || null;
      if (!this?.length) {
        throw new Error("Cannot read property of null or undefined");
      }
      for (let i = 0; i < this.length; i++) {
        const element = this[i];
        initialValue = callback(initialValue, element, this, i);
      }
      return initialValue;
    },
  });
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback: any): any[] {
    if (!this?.length) {
      throw new Error("Cannot read property of null or undefined");
    }
    const res: any[] = [];
    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i], i, this);
      if (value) {
        res.push(value);
      }
    }
    return res;
  };
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5dee48",
      main: "#00fa02",
      dark: "#008800",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6434",
      main: "#00fa02",
      dark: "#008800",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif;",
    allVariants: {
      color: "#8D8D8D",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#1a1a1a",
      },
    },
    MuiButton: {
      outlinedSecondary: {
        color: "#00fa02",
        borderColor: "#008800",
      },
    },
    MuiRadio: {
      colorSecondary: {
        color: "#008800",
      },
    },
  },
});

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(history);

const reduxMiddleware = [middleware, sagaMiddleware];

store.set(reducer(history), initialState, applyMiddleware(...reduxMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <MuiThemeProvider theme={theme}>
      <ReduxStoreProvider store={store.get()}>
        <ConnectedRouter history={history}>
          <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
            <App />
          </MuiPickersUtilsProvider>
        </ConnectedRouter>
      </ReduxStoreProvider>
    </MuiThemeProvider>
  </I18nextProvider>,
  document.getElementById("root")
);

unregister();
