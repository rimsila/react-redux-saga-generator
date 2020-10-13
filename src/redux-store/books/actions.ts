import { createAction } from "redux-actions";
import {
  RESET_BOOKS_DOABLES,
  TOGGLE_BOOKS_BOOLEANABLE_STATE,
  TOGGLE_BOOKS_ERRABLE_STATE,
  TOGGLE_BOOKS_SUCCESSIBLE_STATE,
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  IBooksState,
  BooksErrable,
  BooksBooleanable,
  BooksSuccessible,
} from "./state";
import { IBooks } from "@/model";
export const fetchBooks = createAction<IBooksState>(FETCH_BOOKS, () => ({
  booleanable: { isFetchBooksInProgress: true },
  errable: { fetchBooksErrorMsg: null },
  successible: { fetchBooksSuccessMsg: null },
}));

export const fetchBooksSuccess = createAction<IBooksState, IBooks>(
  FETCH_BOOKS_SUCCESS,
  ({ books, fetchBooksSuccessMsg }) => ({
    booleanable: { isFetchBooksInProgress: false },
    successible: {
      fetchBooksSuccessMsg:
        fetchBooksSuccessMsg || "FETCH_BOOK action fullfilled!",
    },
    books,
  }),
);

export const fetchBooksError = createAction<IBooksState, string>(
  FETCH_BOOKS_ERROR,
  (fetchBooksErrorMsg) => ({
    booleanable: { isFetchBooksInProgress: false },
    errable: { fetchBooksErrorMsg },
  }),
);

//#region Doables
export const resetBooksDoables = createAction<IBooksState>(
  RESET_BOOKS_DOABLES,
  () => ({
    errable: {},
    booleanable: {},
    successible: {},
  }),
);

export const toggleBooksBooleanableState = createAction<
  IBooksState,
  { [key in BooksBooleanable]?: boolean }
>(TOGGLE_BOOKS_BOOLEANABLE_STATE, (key) => ({
  booleanable: key,
}));

export const toggleBooksErrableState = createAction<
  IBooksState,
  { [key in BooksErrable]?: string }
>(TOGGLE_BOOKS_ERRABLE_STATE, (key) => ({
  errable: key,
}));

export const toggleBooksSuccessibleState = createAction<
  IBooksState,
  { [key in BooksSuccessible]?: string }
>(TOGGLE_BOOKS_SUCCESSIBLE_STATE, (key) => ({
  successible: key,
}));
//#endregion

/* new-actions-go-here */
