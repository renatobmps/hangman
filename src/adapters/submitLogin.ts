import axios from "axios";

export async function submitLogin(
  event: { preventDefault: () => void },
  fields: { user: string; password: string }
) {
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
  }
}
