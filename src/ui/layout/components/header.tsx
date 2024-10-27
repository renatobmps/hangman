import * as S from '../styles';
import Logo from '../media/Logo.svg';
import { FaBars } from 'react-icons/fa6';
import * as consts from '../consts';
import { LayoutComponents } from '..';

const Header = () => (
  <S.Header>
    <S.Logo height={50} width={50} alt="Hangman" src={Logo.src} />
    <S.Navigation>
      <S.NavigationButton type="checkbox" hidden />
      <FaBars />
      <S.NavigationInner className="navigation_inner">
        {consts.menuItems.map(LayoutComponents.MenuItem)}
        <LayoutComponents.MenuItem onClick={() => alert('Logoff')}>Exit</LayoutComponents.MenuItem>
      </S.NavigationInner>
    </S.Navigation>
  </S.Header>
)

export default Header;
