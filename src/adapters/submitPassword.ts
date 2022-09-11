import axios from "axios";

export async function submitPassword(
  event: { preventDefault: () => void },
  fields: { password: string; confirmPassword: string }
) {
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

    window.location.href = process.env.PUBLIC_URL + "/";
  } catch (error: any) {
    alert(
      error.response.data.error ||
        error.response.statusText ||
        "Ocorreu um erro!"
    );
  }
}
