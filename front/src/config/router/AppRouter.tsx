import { Routes } from "react-router-dom";
import { singInRouting } from "../../modules/auth/sing.in.routing";
import { shortUrlRouting } from "../../modules/shortUrl/short.routing";
import { dashboardRouting } from "../../modules/dashboard/dashboard.routing";

export const AppRouter = () => (
  <Routes>
    {shortUrlRouting}
    {singInRouting}
    {dashboardRouting}
  </Routes>
);
