import A from "./Style/A";
import Button from "./Style/Button";
import { ICreateUserFormProps } from "../adapters/interfaces";
import CreateUserFormInput from "./CreateUserFormInputs";

export default function CreateUserForm(props: ICreateUserFormProps) {
  return (
    <>
      <CreateUserFormInput
        fieldState={props.fieldState}
        handleFields={props.handleFields}
      />
      <A href="/login">Tentar fazer login</A>
      <Button type="submit" width="100%">
        Cadastrar
      </Button>
    </>
  );
}
