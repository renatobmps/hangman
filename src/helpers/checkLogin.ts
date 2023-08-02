export default function checkLogin() {
  const token: string | null = localStorage.getItem("token");

  if (!token || token === "") {
    localStorage.removeItem("token");
    window.location.href = "/login";
    throw Error("Forbidden");
  }
}