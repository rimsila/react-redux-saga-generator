/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import StateUtil from "@/utils/state-util";

const initialState = {
  favorite: {},
  allFavorite: [],
  successFavorite: {},
  errorFavorite: {},
  hasMoreAllFavorite: true,
  isErrorGetFavorite: false,
  isLoadingGetFavorite: false,
};

export type State = typeof initialState;

type Action =
  | {
      type: "GET_FAVORITE_REQUEST";
      payload?: Record<string, unknown>;
    }
  | {
      type: "GET_FAVORITE_FAILURE";
      payload: {
        errorFavorite: Record<string, unknown>;
      };
    }
  | {
      type: "GET_FAVORITE_SUCCESS";
      payload?: {
        favorite: Record<string, unknown>;
        allFavorite: [];
        successFavorite: Record<string, unknown>;
      };
    }
  | { type: "DEL_FAVORITE_REQUEST"; payload: Record<string, unknown> }
  | { type: "DEL_FAVORITE_FAILURE"; payload: Record<string, unknown> }
  | { type: "DEL_FAVORITE_SUCCESS"; payload: Record<string, unknown> };

// * get data from saga by payload match with initialState
export default (state = initialState, action: Action) => {
  switch (action.type) {
    //* --------------- GET -----------------
    case "GET_FAVORITE_REQUEST":
      return StateUtil.setRequest("GetFavorite", {
        ...state,
        ...action.payload,
      });
    case "GET_FAVORITE_FAILURE":
      return StateUtil.setFailure("GetFavorite", {
        ...state,
        ...action.payload,
      });
    case "GET_FAVORITE_SUCCESS":
      return StateUtil.setSuccess("GetFavorite", {
        ...state,
        ...action.payload,
      });

    //* --------------- DEL ---------------
    case "DEL_FAVORITE_REQUEST":
      return StateUtil.setRequest("DelFavorite", {
        ...state,
        ...action.payload,
      });
    case "DEL_FAVORITE_FAILURE":
      return StateUtil.setFailure("DelFavorite", {
        ...state,
        ...action.payload,
      });
    case "DEL_FAVORITE_SUCCESS":
      return StateUtil.setSuccess("DelFavorite", {
        ...state,
        ...action.payload,
      });
    default:
      return state;
  }
};
