import { InputField } from "../../utils/ui/form/input/InputField";
import { useLogin } from "./hooks/useLogin";
import "./auth.css";

export const UserAuth = () => {
  const { state, handleChange, handleFormReset, handleSubmit } =
    useLogin();

  return (
    <div className="form-user-wrap">
      <form onSubmit={handleSubmit}>
        <div className="title">Connectez-vous</div>
        <InputField
          type="text"
          id="username"
          label="Identifiant"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <InputField
          type="password"
          id="password"
          label="Mot de passe"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="form-btn">
          <button onClick={handleFormReset}>Annuler</button>
          <button type="submit">Connecter vous</button>
        </div>
      </form>
    </div>
  );
};
