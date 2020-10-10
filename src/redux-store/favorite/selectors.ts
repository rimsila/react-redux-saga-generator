import { createSelector } from "reselect";
import { State } from "./reducer";

const favoriteReducer = (state: { favoriteReducer: State }) =>
  state.favoriteReducer;

export const favoriteSelector = createSelector(
  favoriteReducer,
  ({
    favorite,
    allFavorite,
    successFavorite,
    errorFavorite,
    hasMoreAllFavorite,
    isErrorGetFavorite,
    isLoadingGetFavorite,
  }) => ({
    favorite,
    allFavorite,
    successFavorite,
    errorFavorite,
    hasMoreAllFavorite,
    isErrorGetFavorite,
    isLoadingGetFavorite,
  }),
);
