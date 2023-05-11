import { useState } from "react";
import LoginPanel from "../components/Style/LoginPanel";
import CreateUserForm from "../components/CreateUserForm";
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
