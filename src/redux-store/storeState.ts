import { IBooksState } from "./books/state";
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly books: IBooksState;
  /* new-imported-state-key-goes-here */
}
