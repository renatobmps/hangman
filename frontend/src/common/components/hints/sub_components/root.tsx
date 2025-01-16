import { PropsWithChildren } from 'react';
import './root.css';

const Root = ({ children }: PropsWithChildren) => (
  <main className='hints__root'>{children}</main>
)

export default Root