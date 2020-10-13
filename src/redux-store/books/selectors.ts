import { createSelector } from "reselect";
import { IStoreState } from "../storeState";

const booksState = (state: IStoreState) => state.books;

export const booksStateSelector = createSelector(
  booksState,
  ({
    booleanable: { isFetchBooksInProgress },
    books,
    errable: { fetchBooksErrorMsg },
    successible: { fetchBooksSuccessMsg },
  }) => ({
    isFetchBooksInProgress,
    books,
    fetchBooksErrorMsg,
    fetchBooksSuccessMsg,
  }),
);

//#region Doables

//#endregion
