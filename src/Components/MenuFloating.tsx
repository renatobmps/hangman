import A from "./Style/A";
import FloatingMenu from "./Style/FloatingMenu";
import ListMenu from "./Style/ListMenu";
import TitleMenu from "./Style/TitleMenu";

export default function MenuFloating(props: {
  openedMenu: boolean;
  user_name: string;
}) {
  return (
    <FloatingMenu className={props.openedMenu ? "active" : ""}>
      <TitleMenu>{props.user_name}</TitleMenu>
      <ListMenu>
        <li>
          <A href="/change_password">Alterar senha</A>
        </li>
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Sair
          </button>
        </li>
      </ListMenu>
    </FloatingMenu>
  );
}
