'use client'
import { ChangeEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../style.css';
import Filter from '../media/filter.svg';
import Search from '../media/search.svg';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const searchRef = useRef(null);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    router.replace(value ? `?search=${value}` : '?');
  }

  useEffect(() => {
    const handleKeydown = ({ key, altKey, ctrlKey, metaKey, shiftKey }: KeyboardEvent) => {
      if (key === 'k' && !altKey && !ctrlKey && !metaKey && !shiftKey) {
        !!searchRef.current && searchRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [])

  return (
    <nav className='hints__navigation'>
      <label className='hints__navigation-search'>
        <input type="search" placeholder='Search (press K to search)' onChange={handleSearch} ref={searchRef} />
        <Image alt="filter" height={Search.height} src={Search.src} width={Search.width} />
      </label>
      <Image alt="filter" height={Filter.height} src={Filter.src} width={Filter.width} />
    </nav>
  )
}

export default Navigation;