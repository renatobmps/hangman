import { PropsWithChildren } from 'react'
import './title.css'

const Title = ({ children }: PropsWithChildren) => <h2 className='form__title'>{children}</h2>

export default Title