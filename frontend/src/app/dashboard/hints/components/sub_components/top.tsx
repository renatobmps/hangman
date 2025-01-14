'use client'
import Image from 'next/image';
import Link from 'next/link';
import '../style.css';
import LogoMenu from '../media/logo_menu.svg';
import { useEffect, useRef } from 'react';

const Top = () => {
  const details = useRef<HTMLDetailsElement>(null);

  const closeDetails = () => {
    if (details.current) {
      details.current.open = false;
    }
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!details.current.contains(event.target as Node)) {
        closeDetails();
      }
    };

    const handleEsc = ({
      key,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    }: KeyboardEvent) => {
      if (key === 'Escape' && !altKey && !ctrlKey && !metaKey && !shiftKey) {
        closeDetails();
      }
    }

    if (details.current) {
      window.addEventListener('click', handleClick);
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [details.current]);

  return (
    <header className='hints__top'>
      <Link href='/'>
        <Image alt='Hangman logo' height={LogoMenu.height} priority src={LogoMenu.src} width={LogoMenu.width} />
      </Link>
      <details open={false} ref={details}>
        <summary>Menu</summary>
        <nav>
          <ul>
            <li><Link href="/dashboard/hints" onClick={closeDetails}>Hints</Link></li>
            <li><Link href="/" onClick={closeDetails}>Back to game</Link></li>
          </ul>
        </nav>
      </details>
    </header>
  )
}

export default Top;
