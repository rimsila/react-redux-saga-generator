import { all, call, takeLatest, delay, put } from "redux-saga/effects";
import {
  FETCH_BOOKS,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  fetchBooksError,
  fetchBooksSuccess,
  /* new-action-import-goes-here */
} from "./actions";
import { booksApi } from "@/api";

function* fetchBooksSaga() {
  try {
    const response = yield call(booksApi.getBooks);
    const { status, data } = response;
    // console.log("response", response);
    if (status === 200) {
      yield delay(100);
      yield put(fetchBooksSuccess({ books: data?.data }));
    } else {
      yield put(fetchBooksError("Sorry! An error occured!"));
    }
  } catch (error) {
    yield put(fetchBooksError("Sorry! An error occured!"));
  }
}

/* new-saga-goes-here */

export default function* booksSaga() {
  yield all([
    takeLatest(FETCH_BOOKS, fetchBooksSaga),
    /* new-saga-registration-goes-here */
  ]);
}
