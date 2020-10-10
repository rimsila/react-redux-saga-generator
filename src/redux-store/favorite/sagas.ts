/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest, put, call } from "redux-saga/effects";
import * as type from "./constants";
import ac from "./actions";
import api from "@/services/favorite";
/* new-saga-goes-here */

export default function* favoriteSaga() {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([
    takeLatest(type.GET_FAVORITE_REQUEST, getFavoriteSaga),
    takeLatest(type.DEL_FAVORITE_REQUEST, delFavoriteSaga),
    takeLatest(type.EDIT_FAVORITE_REQUEST, editFavoriteSaga),
    /* new-saga-registration-goes-here */
  ]);
}

export function* getFavoriteSaga() {
  try {
    const res = yield call(api.getFavorite);
    console.log("res", res);
    if (res.data) {
      yield put(ac.getFavoriteSuccess(res.data));
    } else {
      yield put(ac.getFavoriteFailure());
    }
  } catch (err) {
    console.log(err);
  }
}

//dit
function* editFavoriteSaga(action) {
  console.log(action.payload);
  try {
    const res = yield call(api.editFavoriteId, action.payload);
    if (res.data) {
      yield put(ac.getFavoriteSuccess({ payload: res.data }));
    } else {
      yield put({ type: type.EDIT_FAVORITE_FAILURE });
      // notificationType(
      //   'customMsg',
      //   'error',
      //   'Update failed!',
      // );
    }
  } catch (error) {}
}

//del
function* delFavoriteSaga(action) {
  console.log(action.payload);
  // const res = yield call(api.delPosts, action.payload);
  // if (res.data && res.data.code < 300) {
  //   yield put({ type: type.DEL_FAVORITE_SUCCESS, payload: action.payload });
  //   // notificationType(
  //   //   'customMsg',
  //   //   'success',
  //   //   'Deleted successfully!',
  //   // );
  // } else {
  //   yield put({ type: type.DEL_FAVORITE_FAILURE });
  //   // notificationType(
  //   //   'customMsg',
  //   //   'error',
  //   //   'Delete failed!',
  //   // );
  // }
}
