import { createSelector } from "reselect";
import { IStoreState } from "../storeState";
import { UsersErrable, UsersBooleanable, UsersSuccessible } from "./state";

export const usersState = () => (state: IStoreState) => state.users;

