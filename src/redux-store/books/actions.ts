import { createAction } from "redux-actions";
import {
  RESET_BOOKS_DOABLES,
  TOGGLE_BOOKS_BOOLEANABLE_STATE,
  TOGGLE_BOOKS_ERRABLE_STATE,
  TOGGLE_BOOKS_SUCCESSIBLE_STATE,
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  DELETE_BOOKS,
  DELETE_BOOKS_SUCCESS,
  DELETE_BOOKS_ERROR,
  ADD_BOOKS,
  ADD_BOOKS_SUCCESS,
  ADD_BOOKS_ERROR,
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

//#region deleteBooks-related constants

export const deleteBooks = createAction<IBooksState>(DELETE_BOOKS, () => ({
  booleanable: { isDeleteBooksInProgress: true },
  errable: { deleteBooksErrorMsg: "" },
  successible: { deleteBooksSuccessMsg: "" },
}));

export const deleteBooksSuccess = createAction<IBooksState, IBooksState>(
  DELETE_BOOKS_SUCCESS,
  (state) => ({
    booleanable: { isDeleteBooksInProgress: false },
    successible: { deleteBooksSuccessMsg: "DELETE_BOOKS action fullfilled!" },
    state,
  }),
);

export const deleteBooksError = createAction<IBooksState, string>(
  DELETE_BOOKS_ERROR,
  (deleteBooksErrorMsg) => ({
    booleanable: { isDeleteBooksInProgress: false },
    errable: { deleteBooksErrorMsg },
  }),
);
//#endregion

//#region addBooks-related constants

export const addBooks = createAction<IBooksState>(ADD_BOOKS, () => ({
  booleanable: { isAddBooksInProgress: true },
  errable: { addBooksErrorMsg: null },
  successible: { addBooksSuccessMsg: null },
}));

export const addBooksSuccess = createAction<IBooksState, IBooksState>(
  ADD_BOOKS_SUCCESS,
  (state) => ({
    booleanable: { isAddBooksInProgress: false },
    successible: { addBooksSuccessMsg: "ADD_BOOKS action fullfilled!" },
    state,
  }),
);

export const addBooksError = createAction<IBooksState, string>(
  ADD_BOOKS_ERROR,
  (addBooksErrorMsg) => ({
    booleanable: { isAddBooksInProgress: false },
    errable: { addBooksErrorMsg },
  }),
);
//#endregion

/* new-actions-go-here */
