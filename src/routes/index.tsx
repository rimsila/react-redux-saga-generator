import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTE_PATH } from "@/utils/route-util";
import ProtectedRoute from "@/routes/protectedRoute";
import { routes } from "./routes";

// const Register = lazy(() => import("pages/Register"));

export default function Routes() {
  const isAuthenticated = true;

  return (
    <React.Suspense fallback={null}>
      {/* //* layout whileList in useRouteMenu */}
      <Switch>
        {/* default login */}
        {/* <Route
            exact
            path={ROUTE_PATH.login}
            component={lazy(() => import("pages/Login"))}
          /> */}

        {/* //* all route with ProtectedRoute */}
        {routes.map((route, index) => (
          <ProtectedRoute key={index} auth={isAuthenticated} {...route} />
        ))}

        {/* page Register */}
        {/* <Route path={ROUTE_PATH.register} component={Register} /> */}

        {/* //* page 404 */}
        {/* <Route path="" component={lazy(() => import("pages/NotFound"))} /> */}
      </Switch>
    </React.Suspense>
  );
}
