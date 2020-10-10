/* eslint-disable prettier/prettier */
export type UsersErrable = "fetchUsersErrorMsg"
/* new-errable-goes-here */

export type UsersBooleanable = "isFetchUsersInProgress" | "isUpdate"
/* new-booleanable-goes-here */
export type UsersSuccessible = "fetchUsersSuccessMsg"
/* new-successible-goes-here */

export interface IUsersState {
  //#region Doables
  readonly errable?: { [key in UsersErrable]?: string };
  readonly booleanable?: { [key in UsersBooleanable]?: boolean };
  readonly successible?: { [key in UsersSuccessible]?: string };
  readonly users?: { [key in UsersSuccessible]?: Record<string, unknown> };
  //#endregion
}
