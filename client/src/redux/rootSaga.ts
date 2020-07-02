import { all, fork } from "redux-saga/effects";
import { localeDetectorSaga } from "./localeDetector";
import { rssFeedApi } from "./rssFeed";

function* rootSaga(): any {
  yield all([fork(localeDetectorSaga), fork(rssFeedApi)]);
}

export default rootSaga;
