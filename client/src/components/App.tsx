import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { requestLocaleChange } from "../redux/localeDetector";
import { SupportedLocale, LOCALE_KEY } from "../constants";
import moment from "moment";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw",
    maxHeight: "100vh",
    overflowX: "hidden",
    backgroundColor: "#111",
  },
}));

moment.updateLocale(SupportedLocale.English, {
  longDateFormat: {
    L: "MM/DD/YY",
  },
} as any);
moment.updateLocale(SupportedLocale.Portuguese, {
  longDateFormat: {
    L: "DD/MM/YY",
  },
} as any);

const App: React.FC = (): ReturnType<React.FC> => {
  const dispatch = useDispatch();
  const preferredLocale = localStorage.getItem(LOCALE_KEY);

  if (preferredLocale) {
    dispatch(requestLocaleChange(preferredLocale as SupportedLocale));
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
};

export default App;
