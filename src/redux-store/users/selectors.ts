/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSelector } from "reselect";
import { IStoreState } from "../storeState";
import { UsersErrable, UsersBooleanable, UsersSuccessible } from "./state";

export const usersState = () => (state: IStoreState) => state.users;

//#region Doables
/**
 * Returns true if the evaluation of a booleanable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectUsersBooleanableState = (
  key: UsersBooleanable | UsersBooleanable[],
) =>
  createSelector(usersState(), ({ booleanable }) =>
    Array.isArray(key)
      ? !!key.filter((k) => booleanable[k]).length
      : booleanable[key],
  );

/**
 * Returns the errable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectUsersErrableState = (key: UsersErrable | UsersErrable[]) =>
  createSelector(usersState(), ({ errable }) =>
    Array.isArray(key) ? !!key.filter((k) => errable[k]).length : errable[key],
  );

/**
 * Returns the successible state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectUsersSuccessibleState = (
  key: UsersSuccessible | UsersSuccessible[],
) =>
  createSelector(usersState(), ({ successible }) =>
    Array.isArray(key)
      ? !!key.filter((k) => successible[k]).length
      : successible[key],
  );
//#endregion
