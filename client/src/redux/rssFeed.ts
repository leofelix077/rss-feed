/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call, delay, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import produce from "immer";
// eslint-disable-next-line import/no-extraneous-dependencies
import RSSParser from "rss-parser";
import i18next from "i18next";
import { RootState } from "./rootReducer";

const parser = new RSSParser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

// types
export const GET_FEED = {
  REQUEST: "GET_FEED.REQUEST",
  SUCCESS: "GET_FEED.SUCCESS",
  ERROR: "GET_FEED.ERROR",
  SET_URL: "GET_FEED.SET_URL",
};

// actions

interface SetUrl {
  type: typeof GET_FEED.SET_URL;
  url: string;
}

export const setUrl = (url: string): SetUrl => ({
  type: GET_FEED.SET_URL,
  url,
});

interface GetFeedRequest {
  type: typeof GET_FEED.REQUEST;
}

export const getFeedRequest = (): GetFeedRequest => ({
  type: GET_FEED.REQUEST,
});

interface GetFeedSuccess {
  type: typeof GET_FEED.SUCCESS;
  feedResult: any;
}

export const getFeedSuccess = (feedResult: any): GetFeedSuccess => ({
  type: GET_FEED.SUCCESS,
  feedResult,
});

interface GetFeedError {
  type: typeof GET_FEED.ERROR;
  error: string;
}

export const getFeedError = (error: string): GetFeedError => ({
  type: GET_FEED.ERROR,
  error,
});

// reducer
interface FeedStatus {
  feedResult: RSSParser.Output | null;
  url: string;
  request: {
    processing: boolean;
    success: boolean;
    error: string | null;
  };
}

export const initialState: FeedStatus = {
  feedResult: null,
  url: "",
  request: {
    processing: false,
    success: false,
    error: null,
  },
};

export function rssFeedReducer(state = initialState, action: any): FeedStatus {
  switch (action.type) {
    case GET_FEED.REQUEST:
      return produce(state, (newState) => {
        newState.request.processing = true;
      });
    case GET_FEED.SUCCESS:
      return produce(state, (newState) => {
        newState.feedResult = action.feedResult;
        newState.request.success = true;
        newState.request.processing = false;
        newState.request.error = null;
      });
    case GET_FEED.ERROR:
      return produce(state, (newState) => {
        newState.feedResult = null;
        newState.request.error = action.error;
        newState.request.success = false;
        newState.request.processing = false;
      });
    case GET_FEED.SET_URL:
      return produce(state, (newState) => {
        newState.url = action.url;
      });
    default:
      return state;
  }
}

// saga
function* feedApiSaga(): any {
  const url = yield select((state: RootState) => state.rssFeed.url);

  try {
    const response = yield call(
      [parser, parser.parseURL],
      process.env.NODE_ENV !== "production" ? `${CORS_PROXY}${url}` : url
    );
    yield delay(500); // simulate longer request
    yield put(getFeedSuccess(response));
  } catch (error) {
    yield put(getFeedError(i18next.t("errors:generic")));
  }
}

export function* rssFeedApi(): SagaIterator {
  yield takeEvery(GET_FEED.REQUEST as any, feedApiSaga);
}
