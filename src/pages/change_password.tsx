import { useState, useContext } from "react";
import LoginPanel from "../components/Style/LoginPanel";
import PasswordForm from "../components/PasswordForm";
import { submitPassword } from "../adapters/submitPassword";
import { handleFields } from "../adapters/handleFields";
import PageDefault from "../components/PageDefault";
import { UserContext } from "../stores/UserContext";

export default function ChangePassword() {
  const userContext = useContext(UserContext);
  const initialState = {
    password: "",
    confirmPassword: "",
  };
  const [fields, setFields] = useState(initialState);

  return (
    <PageDefault userData={userContext?.user?.username ?? "noname"}>
      <LoginPanel onSubmit={(event: any) => submitPassword(event, fields)}>
        <PasswordForm
          fieldState={fields}
          handleFields={(event: any) => handleFields(event, setFields, fields)}
        />
      </LoginPanel>
    </PageDefault>
  );
}
