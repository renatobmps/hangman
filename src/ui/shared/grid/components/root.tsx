import { IRoot } from '../interfaces'
import * as S from '../styles'

const Root = ({ children, use_highlight = false }: IRoot) => <S.Grid $use_highlight={use_highlight}>{children}</S.Grid>

export default Root