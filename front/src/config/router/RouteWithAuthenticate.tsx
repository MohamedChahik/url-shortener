import { useAuthenticate } from "../auth/Authenticate.provider";
import { useNavigate } from "react-router-dom";
import { FC, PropsWithChildren, useEffect } from "react";

export const RouteWithAuthenticate: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuthenticate();

  useEffect(() => {
    if (!auth?.isAuthenticate) {
      navigate("/");
    }
  }, [auth]);

  return <>{children}</>;
};
