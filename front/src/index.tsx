import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/app/App";
import reportWebVitals from "./reportWebVitals";
import { GraphqlProvider } from "./config/graphql/client";
import { NotificationsProvider } from "./config/notifications/NotificationsProvider";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./config/auth/Authenticate.provider";

ReactDOM.render(
  <React.StrictMode>
    <GraphqlProvider>
      <NotificationsProvider>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </NotificationsProvider>
    </GraphqlProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
