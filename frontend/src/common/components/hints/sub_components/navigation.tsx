'use client'
import { ChangeEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import './navigation.css';
import Filter from '../media/filter.svg';
import Search from '../media/search.svg';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();
  const searchRef = useRef(null);

  const currentSearch: string | undefined = window
    .location
    .search
    .replace('?', '')
    .split('&')
    .map(query => query.split('='))
    .find(([key]) => {
      return key === 'search'
    })?.[1];

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
        <input
          defaultValue={currentSearch}
          onChange={handleSearch}
          placeholder='Search (press K to search)'
          ref={searchRef}
          type="search"
        />
        <Image alt="filter" height={Search.height} src={Search.src} width={Search.width} />
      </label>
      <Image alt="filter" height={Filter.height} src={Filter.src} width={Filter.width} />
    </nav>
  )
}

export default Navigation;