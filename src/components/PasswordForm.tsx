import Button from "./Style/Button";
import { FormControlInput } from "./FormControl";

export default function LoginForm(props: {
  fieldState: { password: string; confirmPassword: string };
  handleFields: (event: { target: { name: string; value: string } }) => void;
}) {
  const { fieldState, handleFields } = props;
  return (
    <>
      <FormControlInput
        inputType="password"
        label="Nova senha"
        stateHandle={handleFields}
        stateName="password"
        stateValue={fieldState.password}
        minLength="5"
        required
        autoFocus
      />
      <FormControlInput
        inputType="password"
        label="Confirme a senha"
        stateHandle={handleFields}
        stateName="confirmPassword"
        stateValue={fieldState.confirmPassword}
        minLength="5"
        required
      />
      <Button type="submit" width="100%">
        Trocar
      </Button>
    </>
  );
}
