import { IRadioInput } from '../@types';
import './radio_input.css';

const RadioInput = ({
  strongText = false,
  inputName = '',
  text,
  value,
  ...props
}: IRadioInput) => (
  <label className="form__radio-input">
    <input {...props} name={inputName} type="radio" value={value ?? text} />
    {!!strongText && <strong>{text}</strong>}
    {!strongText && <p>{text}</p>}
  </label>
)

export default RadioInput;