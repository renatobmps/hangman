import { IInputWrapper } from '../@types';
import './input_wrapper.css';

const InputWrapper = ({ children = [] }: IInputWrapper) => {
  const componentKeyRandomKey = `input_wrapper_${Math.floor(Math.random() * 1024)}`;

  return (
    <ul className='form__input_wrapper'>
      {children.map((child, i) => {
        return (<li key={`component_${componentKeyRandomKey}_item_${i}`}>{child}</li>)
      })}
    </ul>
  )
}

export default InputWrapper;