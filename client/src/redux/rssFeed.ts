/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call, delay, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import produce from "immer";
import { transport } from "../lib/transport";

// types
export const GET_FEED = {
  REQUEST: "GET_FEED.REQUEST",
  SUCCESS: "GET_FEED.SUCCESS",
  ERROR: "GET_FEED.ERROR",
};

// actions
interface GetFeedRequest {
  type: typeof GET_FEED.REQUEST;
  url: string;
}

export const getFeedRequest = (url: string): GetFeedRequest => ({
  type: GET_FEED.REQUEST,
  url,
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
  feedResult: any | null;
  request: {
    processing: boolean;
    success: boolean;
    error: string | null;
  };
}

export const initialState: FeedStatus = {
  feedResult: null,
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
    default:
      return state;
  }
}

// saga

function* feedApiSaga(action: any): any {
  const { url } = action;

  try {
    const response: any = yield call(transport, {
      url,
    });
    yield delay(500); // simulate longer request
    yield put(getFeedSuccess(response));
  } catch (error) {
    yield put(getFeedError(error.message));
  }
}

export function* rssFeedApi(): SagaIterator {
  yield takeEvery(GET_FEED.REQUEST as any, feedApiSaga);
}
