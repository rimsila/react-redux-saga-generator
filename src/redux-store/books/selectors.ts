import { createSelector } from "reselect";
import { IStoreState } from "../storeState";

const booksState = (state: IStoreState) => state.books;

export const booksStateSelector = createSelector(
  booksState,
  ({
    booleanable: { isFetchBooksInProgress, isDeleteBooksInProgress },
    books,
    errable: { fetchBooksErrorMsg, deleteBooksErrorMsg },
    successible: { fetchBooksSuccessMsg, deleteBooksSuccessMsg },
  }) => ({
    isFetchBooksInProgress,
    books,
    fetchBooksErrorMsg,
    fetchBooksSuccessMsg,
    isDeleteBooksInProgress,
    deleteBooksErrorMsg,
    deleteBooksSuccessMsg,
  }),
);

//#region Doables

//#endregion
