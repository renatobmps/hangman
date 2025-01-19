import { PropsWithChildren } from 'react'
import './list_wrapper.css'

const ListWrapper = ({ children }: PropsWithChildren) => <section className='form__list-wrapper'>{children}</section>

export default ListWrapper