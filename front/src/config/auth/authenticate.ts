import { LoginUserInput } from "../../graphql";
import { ConnectUserMutation } from "../../utils/graphql/auth/auth.generated";

export type AuthenticateType = {
  isAuthenticate: boolean;
  auth?: ConnectUserMutation["authLogin"];
};

export type AuthContextProps = {
  handleConnectUser: (input: LoginUserInput) => void;
  auth?: AuthenticateType;

  logout: () => void;
};
