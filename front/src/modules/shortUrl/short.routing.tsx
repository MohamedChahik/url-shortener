import { Route } from "react-router-dom";
import ShortUrl from "./ShortUrl";

export const shortUrlRouting = (
    <Route
        path="/"
        element={<ShortUrl />}
     />
);
