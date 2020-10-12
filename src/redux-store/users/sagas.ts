import { DEFAULT_ACTION, FETCH_USERS } from "./constants";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable redux-saga/no-unhandled-errors */
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchUsersError,
  fetchUsersSuccess,
  toggleUsersBooleanableState,
} from "./actions";

import api from "@/apis/favorite";
import { selectUsersBooleanableState } from "./selectors";

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
