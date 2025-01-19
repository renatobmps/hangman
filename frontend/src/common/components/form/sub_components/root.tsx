import { FormHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react'
import './root.css'

const Root = (props: HTMLAttributes<HTMLFormElement>) => <form className='form' {...props} />

export default Root