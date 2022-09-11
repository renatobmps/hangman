import { useState } from "react";
import LoginPanel from "../Components/Style/LoginPanel";
import CreateUserForm from "../Components/CreateUserForm";
import { handleFields } from "../adapters/handleFields";
import { submitCreateAccount } from "../adapters/submitCreateAccount";

export default function CreateLogin() {
  const initialState = {
    name: "",
    password: "",
    confirm: "",
  };
  const [fields, setFields] = useState(initialState);

  return (
    <>
      <LoginPanel onSubmit={(event: any) => submitCreateAccount(event, fields)}>
        <CreateUserForm
          fieldState={fields}
          handleFields={(event: any) => handleFields(event, setFields, fields)}
        />
      </LoginPanel>
    </>
  );
}
