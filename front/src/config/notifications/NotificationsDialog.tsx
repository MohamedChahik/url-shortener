import { createPortal } from "react-dom";
import { useRef, useState } from "react";
import { useNotifications } from "./NotificationsProvider";
import "./notification.css";

export type NotificationsDialogType = {
  open?: boolean;
  title?: string;
  content?: string;
  onCancel: () => (
    isOpen: (open: boolean, timeId: NodeJS.Timer) => void
  ) => void;
  isSuccess: boolean;
};

export const NotificationsDialog = () => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState<undefined | NotificationsDialogType>();
  const resolveRef = useRef((v: boolean) => {});
  const { confirmRef } = useNotifications();

  confirmRef.current = (props) =>
    new Promise((resolve) => {
      setProps(props);
      setOpen(true);
      const toto = props?.onCancel();

      if (toto) {
        toto((isOpen, timeId) => {
          console.log(isOpen);
          setOpen(isOpen);
          clearInterval(timeId);
        });
      }

      resolveRef.current = resolve;
    });

  return createPortal(
    <div className="notification_wrap">
      <dialog
        style={{
          background: !props?.isSuccess ? "#F540409E" : "green",
        }}
        open={open}
        onCancel={() => {
          resolveRef.current(false);
          setOpen(false);
        }}
      >
        <p>{props?.content}</p>
      </dialog>
    </div>,
    document.body
  );
};
