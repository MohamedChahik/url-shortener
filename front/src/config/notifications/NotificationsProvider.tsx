import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";
import { NotificationsDialogType } from "./NotificationsDialog";

const defaultFunction = (p?: NotificationsDialogType) => Promise.resolve(true); 

const defaultValue = {
  confirmRef: {
    current: defaultFunction,
  },
};

const notificationContext = createContext(defaultValue);

export const useNotifications = () => {
  const context = useContext(notificationContext);

  if (!context) throw new Error("notificationsContext no provide");

  return context;
};

export const NotificationsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const confirmRef = useRef(defaultFunction);

  return (
    <notificationContext.Provider value={{ confirmRef }}>
      {children}
    </notificationContext.Provider>
  );
};
