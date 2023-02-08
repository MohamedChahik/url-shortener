import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContextProps, AuthenticateType } from "./authenticate";
import { useMutation } from "@apollo/client";
import {
  ConnectUserMutation,
  ConnectUserMutationVariables,
} from "../../utils/graphql/auth/auth.generated";
import { LoginUserInput } from "../../graphql";
import { CONNECT_USER } from "../../utils/graphql/auth/auth";
import { WAITING_TIME } from "../../modules/shortUrl/hooks/useShortUrl";
import { useNotifications } from "../notifications/NotificationsProvider";
import { useCache } from "../../utils/cache/useCache";
import { useNavigate } from "react-router-dom";

const authContext = createContext<undefined | AuthContextProps>(undefined);

export const useAuthenticate = () => {
  const context = useContext(authContext);

  if (!context) throw new Error("context auth no provide");

  return context;
};

const KEY_CACHE_USER = "@connectUser";

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { setCache, removeCache, getCache } = useCache();
  const { confirmRef } = useNotifications();
  const [auth, setAuth] = useState<AuthenticateType>();
  const [loginUser] = useMutation<
    ConnectUserMutation,
    ConnectUserMutationVariables
  >(CONNECT_USER);
  const navigate = useNavigate();

  const handleCloseDialog = (
    callback: (isOpen: boolean, timeId: NodeJS.Timer) => void
  ) => {
    const timeId = setInterval(() => {
      callback(false, timeId);
    }, WAITING_TIME);
  };

  useEffect(() => {
    (async () => {
      const user = await getCache(KEY_CACHE_USER);
      if (!auth && user) {
        setAuth(user);
        navigate("/dashboard");
      }
    })();
  }, [auth]);

  const logout = async () => {
    await removeCache(KEY_CACHE_USER);
    setAuth({ auth: undefined, isAuthenticate: false });
    navigate("/");
  };

  const handleConnectUser = async (input: LoginUserInput) => {
    await loginUser({
      variables: {
        input,
      },
      onCompleted: (data) => {
        const userConnect = {
          isAuthenticate: true,
          auth: data.authLogin,
        };
        setAuth(userConnect);
        confirmRef.current({
          content: "connect with success",
          onCancel: () => handleCloseDialog,
          isSuccess: true,
        });
        setCache(userConnect, KEY_CACHE_USER);
        navigate("/dashboard");
      },
      onError: (err) => {
        setAuth({
          isAuthenticate: false,
          auth: undefined,
        });
        confirmRef.current({
          content: err.message,
          onCancel: () => handleCloseDialog,
          isSuccess: false,
        });
        removeCache(KEY_CACHE_USER);
      },
    });
  };

  return (
    <authContext.Provider
      value={{
        handleConnectUser,
        auth,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
