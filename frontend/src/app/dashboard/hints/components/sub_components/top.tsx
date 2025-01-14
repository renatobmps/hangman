import Image from 'next/image';
import Link from 'next/link';
import '../style.css';
import LogoMenu from '../media/logo_menu.svg';
import Caret from '../media/caret-down.svg';

const Top = () => (
  <header className='hints__top'>
    <Link href='/'>
      <Image alt='Hangman logo' height={LogoMenu.height} src={LogoMenu.src} width={LogoMenu.width} />
    </Link>
    <button>
      <span>Menu</span>{` `}
      <Image alt='menu' height={Caret.height} src={Caret.src} width={Caret.width} />
    </button>
  </header>
)

export default Top;
