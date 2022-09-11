import axios from "axios";

export async function submitCreateAccount(
  event: { preventDefault: () => void },
  fields: { name: string; password: string; confirm: string }
) {
  try {
    event.preventDefault();

    if (fields.password !== fields.confirm)
      return alert("As senhas não conferem!");

    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/users`,
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
  }
}
