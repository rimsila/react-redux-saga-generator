/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable redux-saga/no-unhandled-errors */
import { all, select, takeLatest, delay, put, call } from "redux-saga/effects";
import {
  DEFAULT_ACTION,
  FETCH_USERS,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  toggleUsersBooleanableState,
  fetchUsersSuccess,
  fetchUsersError,
  /* new-action-import-goes-here */
} from "./actions";
import { selectUsersBooleanableState } from "./selectors";
import api from "@/services/favorite";

export function* intializeSaga() {
  const booleanable = yield select(
    selectUsersBooleanableState("isFetchUsersInProgress"),
  );

  yield put(
    toggleUsersBooleanableState({ isFetchUsersInProgress: !booleanable }),
  );

  console.log(
    "usersSaga has been initialized properly __booleanable__:",
    booleanable,
  );
}

function* fetchUsersSaga() {
  const res = yield call(api.getFavorite);

  yield delay(500); // Just sleep for half a sec just to look real. A saga requires a yield because it's a generator

  try {
    if (res?.data) {
      yield put(fetchUsersSuccess({ users: res?.data }));
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
    takeLatest(DEFAULT_ACTION, intializeSaga),
    takeLatest(FETCH_USERS, fetchUsersSaga),
    /* new-saga-registration-goes-here */
  ]);
}
