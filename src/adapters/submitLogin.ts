import axios from "axios";
import { FormEvent } from "react";
import throwAlertError from './throwAlertError';

export async function submitLogin(
  event: FormEvent,
  fields: { user: string; password: string }
) {
  const submitter = event.currentTarget.querySelector('[type="submit"]');
  submitter?.classList.add('loading');
  try {
    event.preventDefault();

    const response = await axios.post(
      '/api/v1/login',
      fields
    );
    if (response.status !== 200) throw new Error(response.data);

    localStorage.setItem("token", response.data.token);
    window.location.href = "/";
  } catch (error: any) {
    throwAlertError({
      err: error,
      genericMessage: "Ocorreu um erro!",
    });
  } finally {
    submitter?.classList.remove('loading');
  }
}
