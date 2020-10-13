import { IUsersState } from './users/state';
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly users: IUsersState;
	/* new-imported-state-key-goes-here */
}
