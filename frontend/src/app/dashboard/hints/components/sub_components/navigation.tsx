'use client'
import { ChangeEvent } from 'react';
import Image from 'next/image';
import '../style.css';
import Filter from '../media/filter.svg';
import Search from '../media/search.svg';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    router.replace(value ? `?search=${value}` : '?');
  }

  return (
    <nav className='hints__navigation'>
      <label className='hints__navigation-search'>
        <input type="search" placeholder='Search' onChange={handleSearch} />
        <Image alt="filter" height={Search.height} src={Search.src} width={Search.width} />
      </label>
      <Image alt="filter" height={Filter.height} src={Filter.src} width={Filter.width} />
    </nav>
  )
}

export default Navigation;