import Hints from '..';
import { IHint } from '../hints.interfaces';
import '../style.css';
import TrashLogo from '../media/trash.svg';
import Image from 'next/image';

const Hint = ({ isLoading = false, title = '', isActive = false, total_words = 0 }: IHint) => (
  <li className='hints__hint'>
    <>
      <h2>
        {isLoading && (
          <>
            <strong>...</strong>
            <Hints.Loading />
          </>
        )}
        {!isLoading && !!title && (
          <>
            <strong>{title}</strong>
            {total_words > 0 && (
              <input type="checkbox" defaultChecked={isActive} />
            )}
            {!!title && total_words === 0 && (
              <Image alt='delete' height={TrashLogo.height} src={TrashLogo.src} width={TrashLogo.width} />
            )}
          </>
        )}
        {!isLoading && !title && <strong className='no_text'>{`<Not assigned>`}</strong>}
      </h2>
      {!isLoading && total_words >= 0 && (
        <small>{total_words} {total_words === 1 ? 'word' : 'words'}</small>
      )}
    </>
  </li>
)

export default Hint;