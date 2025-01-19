import { ITextInput } from '../@types';
import './text_input.css';

const TextInput = ({ children, ref, ...inputProps }: ITextInput) => (
  <label className='form__text-input'>
    {children && <strong>{children}</strong>}
    <input type="text" {...inputProps} ref={ref} />
  </label>
)

export default TextInput