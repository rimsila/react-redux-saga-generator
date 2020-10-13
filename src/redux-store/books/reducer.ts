import {
  RESET_BOOKS_DOABLES,
  TOGGLE_BOOKS_BOOLEANABLE_STATE,
  TOGGLE_BOOKS_ERRABLE_STATE,
  TOGGLE_BOOKS_SUCCESSIBLE_STATE,
  FETCH_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  DELETE_BOOKS,
  DELETE_BOOKS_SUCCESS,
  DELETE_BOOKS_ERROR,
  ADD_BOOKS,
  ADD_BOOKS_SUCCESS,
  ADD_BOOKS_ERROR,
  /* new-constant-import-goes-here */
} from "./constants";

import { IBooksState } from "./state";
import { reducerPayloadDoableHelper } from "@/redux-store/rootReducer";

const initialState: IBooksState = {
  books: [],
  errable: {},
  booleanable: {},
  successible: {},
};

export default (
  state: IBooksState = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<IBooksState>,
) => {
  const payload =
    type === RESET_BOOKS_DOABLES
      ? incomingPayload
      : (reducerPayloadDoableHelper(state, incomingPayload) as IBooksState);

  switch (type) {
    case TOGGLE_BOOKS_BOOLEANABLE_STATE:
    case TOGGLE_BOOKS_ERRABLE_STATE:
    case TOGGLE_BOOKS_SUCCESSIBLE_STATE:
    case FETCH_BOOKS:
    case FETCH_BOOKS_SUCCESS:
    case FETCH_BOOKS_ERROR:
    case DELETE_BOOKS:
    case DELETE_BOOKS_SUCCESS:
    case DELETE_BOOKS_ERROR:
    case ADD_BOOKS:
    case ADD_BOOKS_SUCCESS:
    case ADD_BOOKS_ERROR:
      /* new-constant-cases-go-here */
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
