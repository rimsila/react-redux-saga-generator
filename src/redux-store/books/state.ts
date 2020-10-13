import { IBooks } from "@/model";

export type BooksErrable = "fetchBooksErrorMsg"
/* new-errable-goes-here */

export type BooksBooleanable = "isFetchBooksInProgress"
/* new-booleanable-goes-here */
export type BooksSuccessible = "fetchBooksSuccessMsg"
/* new-successible-goes-here */

export interface IBooksState {
  readonly books?: IBooks[];

  //#region Doables
  readonly errable?: { [key in BooksErrable]?: string };
  readonly booleanable?: { [key in BooksBooleanable]?: boolean };
  readonly successible?: { [key in BooksSuccessible]?: string };
  //#endregion
}
