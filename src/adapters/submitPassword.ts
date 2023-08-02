import axios from "axios";
import { FormEvent } from "react";

export async function submitPassword(
  event: FormEvent,
  fields: { password: string; confirmPassword: string }
) {
  const submitter = event.currentTarget.querySelector('[type="submit"]');
  submitter?.classList.add('loading');
  try {
    event.preventDefault();

    if (fields.password !== fields.confirmPassword)
      return alert("As senhas não conferem!");

    const response = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/users/`,
      fields,
      {
        headers: { authorization: localStorage.getItem("token") || "" },
        data: fields,
      }
    );
    if (response.status !== 200) throw new Error(response.data);

    window.location.href = "/";
  } catch (error: any) {
    alert(
      error.response.data.error ||
      error.response.statusText ||
      "Ocorreu um erro!"
    );
  } finally {
    submitter?.classList.remove('loading');
  }
}
