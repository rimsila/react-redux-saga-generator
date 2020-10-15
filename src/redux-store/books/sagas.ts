import { all, call, takeLatest, delay, put } from "redux-saga/effects";
import {
  FETCH_BOOKS,
  DELETE_BOOKS,
  ADD_BOOKS,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  fetchBooksError,
  fetchBooksSuccess,
  deleteBooksSuccess,
  deleteBooksError,
  addBooksSuccess,
  addBooksError,
  /* new-action-import-goes-here */
} from "./actions";
import { booksApi } from "@/api";

// * ----------------- fetchBooksSaga ----------------------
function* fetchBooksSaga() {
  try {
    const response = yield call(booksApi.getBooks);
    const { status, data } = response;
    // console.log("response", response);
    if (status === 200) {
      yield delay(2000);
      yield put(fetchBooksSuccess({ books: data?.data }));
    } else {
      yield put(fetchBooksError("Sorry! An error occured!"));
    }
  } catch (error) {
    yield put(fetchBooksError("Sorry! An error occured!"));
  }
}

// * ----------------- deleteBooksSaga ----------------------
function* deleteBooksSaga() {
  const BOOL_VALUE = Math.random() >= 0.5;

  yield delay(500);

  try {
    if (BOOL_VALUE) {
      yield put(deleteBooksSuccess({}));
    } else {
      yield put(
        deleteBooksError("Sorry, An error occured! Please try again later!"),
      );
    }
  } catch (error) {
    yield put(
      deleteBooksError("Sorry, An error occured! Please try again later!"),
    );
  }
}

function* addBooksSaga() {
  const BOOL_VALUE = Math.random() >= 0.5;

  yield delay(500); // Just sleep for half a sec just to look real. A saga requires a yield because it's a generator

  try {
    if (BOOL_VALUE) {
      yield put(addBooksSuccess({}));
    } else {
      yield put(
        addBooksError("Sorry, An error occured! Please try again later!"),
      );
    }
  } catch (error) {
    yield put(
      addBooksError("Sorry, An error occured! Please try again later!"),
    );
  }
}

/* new-saga-goes-here */

export default function* booksSaga() {
  yield all([
    takeLatest(FETCH_BOOKS, fetchBooksSaga),
    takeLatest(DELETE_BOOKS, deleteBooksSaga),
    takeLatest(ADD_BOOKS, addBooksSaga),
    /* new-saga-registration-goes-here */
  ]);
}
