import { PropsWithChildren } from 'react';
import '../style.css';

const HintList = ({ children }: PropsWithChildren) => (
  <ul className='hints__hint-list'>
    {children}
  </ul>
)

export default HintList