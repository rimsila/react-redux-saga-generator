import { IUsersState } from "./users/state";
import { IMoviesState } from "./movies/state";
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly users: IUsersState;
  readonly movies: IMoviesState;
  /* new-imported-state-key-goes-here */
}
