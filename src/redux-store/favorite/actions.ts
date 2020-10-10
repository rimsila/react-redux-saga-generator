/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import * as type from './constants';
//#region Doables

export default {
  // GET POSTS_ ACTION
  getFavoriteRequest: (payload) => ({ type: type.GET_FAVORITE_REQUEST, payload }),
  getFavoriteSuccess: (payload) => ({ type: type.GET_FAVORITE_SUCCESS, payload }),
  getFavoriteFailure: (payload?:any) => ({ type: type.GET_FAVORITE_FAILURE, payload }),

  // GET POSTS_ ACTION
  addFavoriteRequest: (payload) => ({ type: type.ADD_FAVORITE_REQUEST, payload }),
  addFavoriteSuccess: (payload) => ({ type: type.ADD_FAVORITE_SUCCESS, payload }),
  addFavoriteFailure: (payload) => ({ type: type.ADD_FAVORITE_FAILURE, payload }),

  // EDIT POSTS_ ACTION
  editFavoriteRequest: (payload) => ({ type: type.EDIT_FAVORITE_REQUEST, payload }),
  editFavoriteSuccess: (payload) => ({ type: type.EDIT_FAVORITE_SUCCESS, payload }),
  editFavoriteFailure: (payload) => ({ type: type.EDIT_FAVORITE_FAILURE, payload }),

  // EDIT POSTS_ ACTION
  delFavoriteRequest: (payload) => ({ type: type.DEL_FAVORITE_REQUEST, payload }),
  delFavoriteSuccess: (payload) => ({ type: type.DEL_FAVORITE_SUCCESS, payload }),
  delFavoriteFailure: (payload) => ({ type: type.DEL_FAVORITE_FAILURE, payload }),
};

//#endregion

/* new-actions-go-here */
