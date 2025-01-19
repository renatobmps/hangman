import './checker_input.css'
import { ICheckerInput } from '../@types'

const CheckerInput = ({ children, checked = false, ...props }: ICheckerInput) => (
  <label className='form__checker-input'>
    {children}
    <input {...props} defaultChecked={checked} type="checkbox" />
  </label>
)

export default CheckerInput