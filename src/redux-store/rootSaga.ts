/* eslint-disable prettier/prettier */
import users from "./users/sagas";
import movies from "./movies/sagas";
/* new-imported-saga-goes-here */

export default [
  users,
  movies,
  /* new-imported-saga-element-goes-here */
];
