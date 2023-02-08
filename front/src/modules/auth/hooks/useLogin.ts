import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useAuthenticate } from "../../../config/auth/Authenticate.provider";

type UserType = {
  username: string;
  password: string;
};

const initUser = {
  username: "",
  password: "",
};

export const useLogin = () => {
  const { handleConnectUser } = useAuthenticate();
  const [state, setState] = useState<UserType>(initUser);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormReset = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setState(initUser);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleConnectUser({
      email: state.username,
      password: state.password,
    });
  };

  return {
    state,
    handleChange,
    handleFormReset,
    handleSubmit,
  };
};
