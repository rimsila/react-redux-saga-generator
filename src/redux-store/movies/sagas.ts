/* eslint-disable redux-saga/no-unhandled-errors */
import { all, select, takeLatest, delay, put } from "redux-saga/effects";
import {
  DEFAULT_ACTION,
  FETCH_MOVIES,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  toggleMoviesBooleanableState,
  fetchMoviesSuccess,
  fetchMoviesError,
  /* new-action-import-goes-here */
} from "./actions";
import { selectMoviesBooleanableState } from "./selectors";

export function* intializeSaga() {
  const booleanable = yield select(
    selectMoviesBooleanableState("isFetchMoviesInProgress"),
  );

  yield put(
    toggleMoviesBooleanableState({ isFetchMoviesInProgress: !booleanable }),
  );

  console.log(
    "moviesSaga has been initialized properly __booleanable__:",
    booleanable,
  );
}

function* fetchMoviesSaga() {
  const BOOL_VALUE = Math.random() >= 0.5;

  yield delay(500); // Just sleep for half a sec just to look real. A saga requires a yield because it's a generator

  try {
    if (BOOL_VALUE) {
      yield put(fetchMoviesSuccess({}));
    } else {
      yield put(
        fetchMoviesError("Sorry, An error occured! Please try again later!"),
      );
    }
  } catch (error) {
    yield put(
      fetchMoviesError("Sorry, An error occured! Please try again later!"),
    );
  }
}

/* new-saga-goes-here */

export default function* moviesSaga() {
  yield all([
    takeLatest(DEFAULT_ACTION, intializeSaga),
    takeLatest(FETCH_MOVIES, fetchMoviesSaga),
    /* new-saga-registration-goes-here */
  ]);
}
