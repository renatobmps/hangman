import Image from 'next/image';
import '../style.css';
import Filter from '../media/filter.svg';
import Search from '../media/search.svg';

const Navigation = () => (
  <nav className='hints__navigation'>
    <label className='hints__navigation-search'>
      <input type="search" placeholder='Search' />
      <Image alt="filter" height={Search.height} src={Search.src} width={Search.width} />
    </label>
    <Image alt="filter" height={Filter.height} src={Filter.src} width={Filter.width} />
  </nav>
)

export default Navigation;