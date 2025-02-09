import axios from "axios";
import { FormEvent } from "react";

export async function submitCreateAccount(
  event: FormEvent,
  fields: { name: string; password: string; confirm: string },
) {
  const submitter = event.currentTarget.querySelector('[type="submit"]');
  submitter?.classList.add("loading");
  try {
    event.preventDefault();

    if (fields.password !== fields.confirm)
      return alert("As senhas não conferem!");

    const response = await axios.post("/api/v1/users", fields, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 201) throw new Error(response.data ?? response);
    window.location.href = "/login";
  } catch (error: any) {
    alert(
      JSON.stringify(
        (
          error?.response?.data?.error ??
            error?.response?.statusText ??
            error?.message ??
            error ??
            "Ocorreu um erro!"
        ),
        null,
        2
      )
    );
  } finally {
    submitter?.classList.remove("loading");
  }
}
