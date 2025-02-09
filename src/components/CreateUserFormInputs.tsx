import FormControl from "./Style/FormControl";
import Input from "./Style/Input";
import Label from "./Style/Label";
import { ICreateUserFormProps } from "../adapters/interfaces";

export default function CreateUserFormInput(props: ICreateUserFormProps) {
  return (
    <>
      <FormControl>
        <Label htmlFor="name">Usuário</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={props.fieldState.name}
          onInput={(e: { currentTarget: { value: string } }) => {
            e.currentTarget.value = e.currentTarget.value
              .toLowerCase()
              .replace(" ", "_")
              .trim();
            props.handleFields(e);
          }}
          minLength="5"
          required
          autoFocus
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Crie sua senha</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={props.fieldState.password}
          onInput={props.handleFields}
          minLength="5"
          required
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="confirm">Confirmação de senha</Label>
        <Input
          type="password"
          id="confirm"
          name="confirm"
          value={props.fieldState.confirm}
          onInput={props.handleFields}
          minLength="5"
          required
        />
      </FormControl>
    </>
  );
}
