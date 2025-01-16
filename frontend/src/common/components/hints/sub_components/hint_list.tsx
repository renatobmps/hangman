import { PropsWithChildren } from 'react';
import './hint_list.css';

const HintList = ({ children }: PropsWithChildren) => (
  <ul className='hints__hint-list'>
    {children}
  </ul>
)

export default HintList