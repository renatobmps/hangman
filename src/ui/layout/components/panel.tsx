import { PropsWithChildren } from 'react';
import * as S from '../styles'

const Panel = ({ children }: PropsWithChildren) => (
  <S.DashboardPanel>{children}</S.DashboardPanel>
)

export default Panel;