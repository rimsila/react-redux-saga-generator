import { createAction } from "redux-actions";
import {
  DEFAULT_ACTION,
  RESET_MOVIES_DOABLES,
  TOGGLE_MOVIES_BOOLEANABLE_STATE,
  TOGGLE_MOVIES_ERRABLE_STATE,
  TOGGLE_MOVIES_SUCCESSIBLE_STATE,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  IMoviesState,
  MoviesErrable,
  MoviesBooleanable,
  MoviesSuccessible,
} from "./state";

export const defaultAction = createAction<IMoviesState>(DEFAULT_ACTION, () => ({
  errable: { fetchMoviesErrorMsg: null },
  booleanable: { isFetchMoviesInProgress: true },
  successible: { fetchMoviesSuccessMsg: "Successfully initialized!" },
}));

//#region Doables
export const resetMoviesDoables = createAction<IMoviesState>(
  RESET_MOVIES_DOABLES,
  () => ({
    errable: {},
    booleanable: {},
    successible: {},
  }),
);

export const toggleMoviesBooleanableState = createAction<
  IMoviesState,
  { [key in MoviesBooleanable]?: boolean }
>(TOGGLE_MOVIES_BOOLEANABLE_STATE, (key) => ({
  booleanable: key,
}));

export const toggleMoviesErrableState = createAction<
  IMoviesState,
  { [key in MoviesErrable]?: string }
>(TOGGLE_MOVIES_ERRABLE_STATE, (key) => ({
  errable: key,
}));

export const toggleMoviesSuccessibleState = createAction<
  IMoviesState,
  { [key in MoviesSuccessible]?: string }
>(TOGGLE_MOVIES_SUCCESSIBLE_STATE, (key) => ({
  successible: key,
}));
//#endregion

//#region fetchMovies-related constants

export const fetchMovies = createAction<IMoviesState>(FETCH_MOVIES, () => ({
  booleanable: { isFetchMoviesInProgress: true },
  errable: { fetchMoviesErrorMsg: null },
  successible: { fetchMoviesSuccessMsg: null },
}));

export const fetchMoviesSuccess = createAction<IMoviesState, IMoviesState>(
  FETCH_MOVIES_SUCCESS,
  (state) => ({
    booleanable: { isFetchMoviesInProgress: false },
    successible: { fetchMoviesSuccessMsg: "FETCH_MOVIES action fullfilled!" },
    state,
  }),
);

export const fetchMoviesError = createAction<IMoviesState, string>(
  FETCH_MOVIES_ERROR,
  (fetchMoviesErrorMsg) => ({
    booleanable: { isFetchMoviesInProgress: false },
    errable: { fetchMoviesErrorMsg },
  }),
);
//#endregion

/* new-actions-go-here */
