import { useState, FormEvent } from "react";
import LoginPanel from "../components/Style/LoginPanel";
import LoginForm from "../components/LoginForm";
import { handleFields } from "../adapters/handleFields";
import { submitLogin } from "../adapters/submitLogin";

export default function Login() {
  const initialState = {
    user: "",
    password: "",
  };
  const [fields, setFields] = useState(initialState);

  return (
    <>
      <LoginPanel onSubmit={(event: FormEvent) => submitLogin(event, fields)}>
        <LoginForm
          fieldState={fields}
          handleFields={(event: any) => handleFields(event, setFields, fields)}
        />
      </LoginPanel>
    </>
  );
}
