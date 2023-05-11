import A from "./Style/A";
import Button from "./Style/Button";
import { FormControlInput } from "./FormControl";
import { ILoginFormProps } from "../adapters/interfaces";

export default function LoginForm(props: ILoginFormProps) {
  return (
    <>
      <FormControlInput
        inputType="text"
        label="Usuário"
        stateHandle={props.handleFields}
        stateName="user"
        stateValue={props.fieldState.user}
        minLength="5"
        required
        autoFocus
      />
      <FormControlInput
        inputType="password"
        label="Senha"
        stateHandle={props.handleFields}
        stateName="password"
        stateValue={props.fieldState.password}
        minLength="5"
        required
      />
      <A href="/register">Cadastrar-se</A>
      <Button type="submit" width="100%">
        Entrar
      </Button>
    </>
  );
}
