import { ButtonHTMLAttributes } from 'react';
import './submit.css'
import Button from '@/common/components/button';

const Submit = ({ children = 'submit', ...buttonProps }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <div className='form__submit'>
    <Button.Primary {...buttonProps} type='submit'>{children}</Button.Primary>
  </div>
)

export default Submit