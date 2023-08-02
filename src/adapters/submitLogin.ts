import axios from "axios";
import { FormEvent } from "react";

export async function submitLogin(
  event: FormEvent,
  fields: { user: string; password: string }
) {
  const submitter = event.currentTarget.querySelector('[type="submit"]');
  submitter?.classList.add('loading');
  try {
    event.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/login`,
      fields
    );
    if (response.status !== 200) throw new Error(response.data);

    localStorage.setItem("token", response.data.token);
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
