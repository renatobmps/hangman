import { useState } from "react";
import LoginPanel from "../Components/Style/LoginPanel";
import PasswordForm from "../Components/PasswordForm";
import { submitPassword } from "../adapters/submitPassword";
import { handleFields } from "../adapters/handleFields";
export default function ChangePassword() {
  const initialState = {
    password: "",
    confirmPassword: "",
  };
  const [fields, setFields] = useState(initialState);

  return (
    <LoginPanel onSubmit={(event: any) => submitPassword(event, fields)}>
      <PasswordForm
        fieldState={fields}
        handleFields={(event: any) => handleFields(event, setFields, fields)}
      />
    </LoginPanel>
  );
}
