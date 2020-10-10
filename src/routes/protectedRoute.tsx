/* eslint-disable react/prop-types */
import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTE_PATH } from "@/utils/route-util";

/**
 * Protected routes and authentication with React Router v4
 *
 * @see https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
 * @see https://tylermcginnis.com/react-router-protected-routes-authentication/
 */

function ProtectedRoute({ component: Component, auth, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          auth ? (
            <Component {...props} />
          ) : (
            // TODO: Change default pathname if needed.
            <Redirect
              to={{
                pathname: ROUTE_PATH.login,
                state: { from: props.location },
              }}
            />
          )
        }
      />
    </>
  );
}

export default React.memo(ProtectedRoute);
