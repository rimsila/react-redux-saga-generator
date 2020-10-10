/* eslint-disable prettier/prettier */
export type MoviesErrable = "fetchMoviesErrorMsg"
/* new-errable-goes-here */

export type MoviesBooleanable = "isFetchMoviesInProgress"
/* new-booleanable-goes-here */

export type MoviesSuccessible = "fetchMoviesSuccessMsg"
/* new-successible-goes-here */

export interface IMoviesState {
  //#region Doables
  readonly errable?: { [key in MoviesErrable]?: string };
  readonly booleanable?: { [key in MoviesBooleanable]?: boolean };
  readonly successible?: { [key in MoviesSuccessible]?: string };
  //#endregion
}
