/* eslint-disable redux-saga/no-unhandled-errors */
import { all, select, takeLatest, delay, put } from "redux-saga/effects";
import {
  DEFAULT_ACTION,
  FETCH_USERS,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  toggleUsersBooleanableState,
  fetchUsersSuccess,
  fetchUsersError,
  toggleUsersErrableState,
  toggleUsersSuccessibleState,
  /* new-action-import-goes-here */
} from "./actions";
import { selectUsersBooleanableState } from "./selectors";

export function* intializeSaga() {
  const booleanable = yield select(
    selectUsersBooleanableState("isFetchUsersInProgress"),
  );

  yield put(toggleUsersBooleanableState({ __booleanable__: !booleanable }));

  console.log(
    "usersSaga has been initialized properly __booleanable__:",
    booleanable,
  );
}

function* fetchUsersSaga() {
  const BOOL_VALUE = Math.random() >= 0.5;

  yield delay(500); // Just sleep for half a sec just to look real. A saga requires a yield because it's a generator

  try {
    if (BOOL_VALUE) {
      yield put(fetchUsersSuccess({}));
      yield put(toggleUsersSuccessibleState({ fetchUsersSuccessMsg: "good" }));
    } else {
      yield put(
        fetchUsersError("Sorry, An error occured! Please try again later!"),
      );
    }
  } catch (error) {
    yield put(
      fetchUsersError("Sorry, An error occured! Please try again later!"),
    );
  }
}

/* new-saga-goes-here */

export default function* usersSaga() {
  yield all([
    takeLatest(FETCH_USERS, fetchUsersSaga),
    /* new-saga-registration-goes-here */
  ]);
}
