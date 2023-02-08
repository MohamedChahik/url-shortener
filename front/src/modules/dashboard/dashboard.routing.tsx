import { Route } from "react-router-dom";
import ShortUrl from "../shortUrl/ShortUrl";
import { Dashboard } from "./Dashboard";
import { RouteWithAuthenticate } from "../../config/router/RouteWithAuthenticate";

export const dashboardRouting = (
  <Route
    path="/dashboard"
    element={
      <RouteWithAuthenticate>
        <Dashboard />
      </RouteWithAuthenticate>
    }
  />
);
