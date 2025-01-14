import { PropsWithChildren } from 'react';
import '../style.css';

const Root = ({ children }: PropsWithChildren) => (
  <main className='hints__root'>{children}</main>
)

export default Root