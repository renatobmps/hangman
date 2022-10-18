import { useState, useContext } from "react";
import LoginPanel from "../Components/Style/LoginPanel";
import PasswordForm from "../Components/PasswordForm";
import { submitPassword } from "../adapters/submitPassword";
import { handleFields } from "../adapters/handleFields";
import PageDefault from "../Components/PageDefault";
import { UserContext } from "../Stores/UserContext";

export default function ChangePassword() {
  const userContext = useContext(UserContext);
  const initialState = {
    password: "",
    confirmPassword: "",
  };
  const [fields, setFields] = useState(initialState);

  return (
    <PageDefault userData={userContext.user.username}>
      <LoginPanel onSubmit={(event: any) => submitPassword(event, fields)}>
        <PasswordForm
          fieldState={fields}
          handleFields={(event: any) => handleFields(event, setFields, fields)}
        />
      </LoginPanel>
    </PageDefault>
  );
}
