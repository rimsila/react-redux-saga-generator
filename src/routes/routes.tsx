import { ROUTE_PATH } from "@/utils/route-util";
import { lazy } from "react";

const NotFound = lazy(() => import("@/pages/notFound"));

export const routes = [
  {
    path: [ROUTE_PATH.root, "/"],
    exact: true,
    component: NotFound,
  },
];
