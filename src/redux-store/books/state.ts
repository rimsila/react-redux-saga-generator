import { IBooks } from "@/model";

export type BooksErrable = "fetchBooksErrorMsg"
| 'deleteBooksErrorMsg' | 'addBooksErrorMsg' 
/* new-errable-goes-here */

export type BooksBooleanable = "isFetchBooksInProgress"
| 'isDeleteBooksInProgress' | 'isAddBooksInProgress' 
/* new-booleanable-goes-here */
export type BooksSuccessible = "fetchBooksSuccessMsg"
| 'deleteBooksSuccessMsg' | 'addBooksSuccessMsg'
 /* new-successible-goes-here */

export interface IBooksState {
  readonly books?: IBooks[];

  //#region Doables
  readonly errable?: { [key in BooksErrable]?: string };
  readonly booleanable?: { [key in BooksBooleanable]?: boolean };
  readonly successible?: { [key in BooksSuccessible]?: string };
  //#endregion
}
