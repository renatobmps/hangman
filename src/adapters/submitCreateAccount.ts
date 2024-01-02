import axios from "axios";
import { FormEvent } from "react";

export async function submitCreateAccount(
  event: FormEvent,
  fields: { name: string; password: string; confirm: string }
) {
  const submitter = event.currentTarget.querySelector('[type="submit"]');
  submitter?.classList.add('loading');
  try {
    event.preventDefault();

    if (fields.password !== fields.confirm)
      return alert("As senhas não conferem!");

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://0.0.0.0:8080'}/users`,
      fields
    );
    if (response.status !== 201) throw new Error(response.data);
    window.location.href = "/login";
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
