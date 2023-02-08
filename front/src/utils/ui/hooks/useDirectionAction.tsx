import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticate } from "../../../config/auth/Authenticate.provider";

export const useDirectionAction = () => {
  const { logout } = useAuthenticate();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const directionActions = () => {
    switch (pathname) {
      case "/dashboard":
        return logout();
      case "/":
        return navigate("/login");
      default:
        return navigate("/");
    }
  };

  const buttonName = useMemo(() => {
    switch (pathname) {
      case "/dashboard":
        return "Deconnexion";
      case "/":
        return "Espace Profesionnel";
      default:
        return "Retour à l'accueil";
    }
  }, [pathname]);

  return {
    buttonName,
    directionActions,
  };
};
