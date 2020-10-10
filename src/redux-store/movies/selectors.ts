/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSelector } from "reselect";
import { IStoreState } from "../storeState";
import { MoviesErrable, MoviesBooleanable, MoviesSuccessible } from "./state";

export const moviesState = () => (state: IStoreState) => state.movies;

//#region Doables
/**
 * Returns true if the evaluation of a booleanable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectMoviesBooleanableState = (
  key: MoviesBooleanable | MoviesBooleanable[],
) =>
  createSelector(moviesState(), ({ booleanable }) =>
    Array.isArray(key)
      ? !!key.filter((k) => booleanable[k]).length
      : booleanable[key],
  );

/**
 * Returns the errable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectMoviesErrableState = (
  key: MoviesErrable | MoviesErrable[],
) =>
  createSelector(moviesState(), ({ errable }) =>
    Array.isArray(key) ? !!key.filter((k) => errable[k]).length : errable[key],
  );

/**
 * Returns the successible state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectMoviesSuccessibleState = (
  key: MoviesSuccessible | MoviesSuccessible[],
) =>
  createSelector(moviesState(), ({ successible }) =>
    Array.isArray(key)
      ? !!key.filter((k) => successible[k]).length
      : successible[key],
  );
//#endregion
