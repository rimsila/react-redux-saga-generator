import { createAction } from "redux-actions";
import {
  RESET_USERS_DOABLES,
  TOGGLE_USERS_BOOLEANABLE_STATE,
  TOGGLE_USERS_ERRABLE_STATE,
  TOGGLE_USERS_SUCCESSIBLE_STATE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  /* new-constant-import-goes-here */
} from "./constants";
import {
  IUsersState,
  UsersErrable,
  UsersBooleanable,
  UsersSuccessible,
} from "./state";

//#region Doables
export const resetUsersDoables = createAction<IUsersState>(
  RESET_USERS_DOABLES,
  () => ({
    errable: {},
    booleanable: {},
    successible: {},
  }),
);

export const toggleUsersBooleanableState = createAction<
  IUsersState,
  { [key in UsersBooleanable]?: boolean }
>(TOGGLE_USERS_BOOLEANABLE_STATE, (key) => ({
  booleanable: key,
}));

export const toggleUsersErrableState = createAction<
  IUsersState,
  { [key in UsersErrable]?: string }
>(TOGGLE_USERS_ERRABLE_STATE, (key) => ({
  errable: key,
}));

export const toggleUsersSuccessibleState = createAction<
  IUsersState,
  { [key in UsersSuccessible]?: string }
>(TOGGLE_USERS_SUCCESSIBLE_STATE, (key) => ({
  successible: key,
}));
//#endregion

//#region fetchUsers-related constants

export const fetchUsers = createAction<IUsersState>(FETCH_USERS, () => ({
  booleanable: { isFetchUsersInProgress: true },
  errable: { fetchUsersErrorMsg: null },
  successible: { fetchUsersSuccessMsg: null },
}));

export const fetchUsersSuccess = createAction<IUsersState, IUsersState>(
  FETCH_USERS_SUCCESS,
  (state) => ({
    booleanable: { isFetchUsersInProgress: false },
    successible: { fetchUsersSuccessMsg: "FETCH_USERS action fullfilled!" },
    state,
  }),
);

export const fetchUsersError = createAction<IUsersState, string>(
  FETCH_USERS_ERROR,
  (fetchUsersErrorMsg) => ({
    booleanable: { isFetchUsersInProgress: false },
    errable: { fetchUsersErrorMsg },
  }),
);
//#endregion

/* new-actions-go-here */
