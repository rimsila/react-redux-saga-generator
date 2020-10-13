/* eslint-disable prettier/prettier */

export type UsersErrable =
  | '__errable__' // Remove this. It's just a placeholder
  | 'fetchUsersErrorMsg' /* new-errable-goes-here */;

export type UsersBooleanable =
  | '__booleanable__' // Remove this. It's just a placeholder
  | 'isFetchUsersInProgress' /* new-booleanable-goes-here */;

export type UsersSuccessible =
  | '__successible__' // Remove this. It's just a placeholder
  | 'fetchUsersSuccessMsg' /* new-successible-goes-here */;

export interface IUsersState{

  //#region Doables
  readonly errable?: { [key in UsersErrable]?: string };
  readonly booleanable?: { [key in UsersBooleanable]?: boolean };
  readonly successible?: { [key in UsersSuccessible]?: string };
  //#endregion
}
