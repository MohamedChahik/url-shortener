import { PropsWithChildren, FC } from "react";
import { NotificationsDialog } from "../../config/notifications/NotificationsDialog";
import { useDirectionAction } from "./hooks/useDirectionAction";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { buttonName, directionActions } = useDirectionAction();

  return (
    <div className="app_wrap">
      <button className="btn_connexion" onClick={directionActions}>
        {buttonName}
      </button>
      <NotificationsDialog />
      {children}
    </div>
  );
};
