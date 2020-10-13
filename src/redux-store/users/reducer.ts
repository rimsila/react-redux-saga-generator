import {
  DEFAULT_ACTION,
  RESET_USERS_DOABLES,
  TOGGLE_USERS_BOOLEANABLE_STATE,
  TOGGLE_USERS_ERRABLE_STATE,
  TOGGLE_USERS_SUCCESSIBLE_STATE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  /* new-constant-import-goes-here */
} from "./constants";

import { IUsersState } from "./state";
import { reducerPayloadDoableHelper } from "@/redux-store/rootReducer";

const initialState: IUsersState = {
  errable: {},
  booleanable: {},
  successible: {},
};

export default (
  state: IUsersState = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<IUsersState>,
) => {
  const payload =
    type === RESET_USERS_DOABLES
      ? incomingPayload
      : (reducerPayloadDoableHelper(state, incomingPayload) as IUsersState);

  switch (type) {
    case TOGGLE_USERS_BOOLEANABLE_STATE:
    case TOGGLE_USERS_ERRABLE_STATE:
    case TOGGLE_USERS_SUCCESSIBLE_STATE:
    case FETCH_USERS:
    case FETCH_USERS_SUCCESS:
    case FETCH_USERS_ERROR:
    /* new-constant-cases-go-here */
    case DEFAULT_ACTION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
