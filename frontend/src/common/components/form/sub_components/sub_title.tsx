import { PropsWithChildren } from 'react';
import './sub_title.css';

const SubTitle = ({ children }: PropsWithChildren) => (
  <h3 className='form__sub-title'>{children}</h3>
)

export default SubTitle