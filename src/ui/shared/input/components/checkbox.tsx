import { FaCheck } from 'react-icons/fa6'
import * as S from '../styles'
import { ICheckbox } from '../interfaces'

const Checkbox = ({ checked = false, ...props }: ICheckbox) => (
  <S.Container $checked={!!checked}>
    <S.Checkbox {...props} type="checkbox" checked={!!checked} />
    <S.Checkmark>
      <FaCheck />
    </S.Checkmark>
  </S.Container>
)

export default Checkbox