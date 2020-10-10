/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  DEFAULT_ACTION,
  RESET_MOVIES_DOABLES,
  TOGGLE_MOVIES_BOOLEANABLE_STATE,
  TOGGLE_MOVIES_ERRABLE_STATE,
  TOGGLE_MOVIES_SUCCESSIBLE_STATE,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  /* new-constant-import-goes-here */
} from "./constants";

import { IMoviesState } from "./state";
import { reducerPayloadDoableHelper } from "@/redux-store/rootReducer";

const initialState: IMoviesState = {
  errable: {},
  booleanable: {},
  successible: {},
};

export default (
  state: IMoviesState = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<IMoviesState>,
) => {
  const payload =
    type === RESET_MOVIES_DOABLES
      ? incomingPayload
      : (reducerPayloadDoableHelper(state, incomingPayload) as IMoviesState);

  switch (type) {
    case TOGGLE_MOVIES_BOOLEANABLE_STATE:
    case TOGGLE_MOVIES_ERRABLE_STATE:
    case TOGGLE_MOVIES_SUCCESSIBLE_STATE:
    case FETCH_MOVIES:
    case FETCH_MOVIES_SUCCESS:
    case FETCH_MOVIES_ERROR:
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
