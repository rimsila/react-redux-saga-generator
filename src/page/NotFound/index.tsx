import * as React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "@/utils/route-util";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux-store/users/actions";
import { createSelector } from "reselect";
import { usersState } from "@/redux-store/users/selectors";
const NotFound = () => {
  const dispatch = useDispatch();
  const {

    booleanable: { isFetchUsersInProgress, isUpdate },
  } = useSelector(usersState());

  if (isFetchUsersInProgress) return <h1>Loading.....</h1>;
  console.log("isUpdate", isUpdate);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <button onClick={() => dispatch(fetchUsers())}> home page</button>
      </div>
    </div>
  );
};

export default NotFound;
