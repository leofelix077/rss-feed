import { combineReducers, Reducer } from "redux";
import {
  localeDetectorReducer as localeDetector,
  initialState as localeDetectorState,
} from "./localeDetector";
import {
  rssFeedReducer as rssFeed,
  initialState as rssFeedState,
} from "./rssFeed";
import { connectRouter } from "connected-react-router";

export const reducer = (history: any): Reducer =>
  combineReducers({
    localeDetector,
    rssFeed,
    router: connectRouter(history),
  });

export const initialState = {
  localeDetector: localeDetectorState,
  rssFeed: rssFeedState,
};

export type RootState = typeof initialState;
