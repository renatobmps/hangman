import * as S from "../styles";
import Logo from "../media/logo.svg";
import { FaBars } from "react-icons/fa6";
import * as consts from "../consts";
import { LayoutComponents } from "..";

const Header = () => (
  <S.Header>
    <S.LogoTop height={50} width={50} alt="Hangman" src={Logo.src} />
    <S.MenuNavigation>
      <S.MenuNavigationButton type="checkbox" hidden />
      <FaBars />
      <S.MenuNavigationInner className="navigation_inner">
        {consts.menuItems.map(LayoutComponents.MenuItem)}
        <LayoutComponents.MenuItem onClick={() => alert("Logoff")}>
          Exit
        </LayoutComponents.MenuItem>
      </S.MenuNavigationInner>
    </S.MenuNavigation>
  </S.Header>
);

export default Header;
