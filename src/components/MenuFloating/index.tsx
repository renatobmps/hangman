import { useContext } from "react";
import A from "../Style/A";
import FloatingMenu from "../Style/FloatingMenu";
import ListMenu from "../Style/ListMenu";
import TitleMenu from "../Style/TitleMenu";
import { UserContext } from "../../stores/UserContext";

export default function MenuFloating(props: { openedMenu: boolean }) {
  const userContext = useContext(UserContext);

  return (
    <FloatingMenu className={props.openedMenu ? "active" : ""}>
      <TitleMenu>{userContext?.user?.username ?? "no_name"}</TitleMenu>
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
