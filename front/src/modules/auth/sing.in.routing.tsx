import { Route } from "react-router-dom";
import { UserAuth } from "./UserAuth";

export const singInRouting = <Route path="/login" element={<UserAuth />} />;
