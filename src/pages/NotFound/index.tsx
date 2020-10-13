import "./styles.css";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  toggleUsersBooleanableState,
} from "@/redux-store/users/actions";
import { usersState } from "@/redux-store/users/selectors";

const NotFound = () => {
  const dispatch = useDispatch();
  const {
    booleanable: { isFetchUsersInProgress },
  } = useSelector(usersState());

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found {Number(isFetchUsersInProgress)}</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
