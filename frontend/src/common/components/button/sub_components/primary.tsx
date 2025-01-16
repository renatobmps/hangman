import Link from 'next/link'
import { IPrimary } from '../@types'
import './primary.css'

const Primary = ({ children, ...props }: IPrimary) => (
  <>
    {'href' in props && <Link {...props} className='button__primary'>{children}</Link>}
    {!('href' in props) && <button {...props} className='button__primary' type={props.type ?? 'button'}>{children}</button>}
  </>
)

export default Primary