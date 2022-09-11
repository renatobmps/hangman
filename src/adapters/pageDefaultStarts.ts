import { IPageDefaultProps } from "./interfaces";

export function pageDefaultStart(
  handleKeyboard: (event: any) => void,
  handleClick: (event: any) => void,
  props: IPageDefaultProps
) {
  if (localStorage.getItem("theme")) {
    document.documentElement.style.setProperty(
      "--color-1",
      localStorage.getItem("theme")
    );
  }
  const pageTitle = props.pageTitle ? props.pageTitle : "Forca";
  const titleDom = document.querySelector("head title");
  if (titleDom) titleDom.innerHTML = pageTitle;
  document.addEventListener("keydown", handleKeyboard);
  document.addEventListener("click", handleClick);
  setTimeout(() => {
    localStorage.setItem("hello_word", "true");
  }, 1000);
}
