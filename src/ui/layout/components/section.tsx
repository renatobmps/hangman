import { ISection, ISectionAsText } from '../interfaces';
import * as S from '../styles'

const Section = ({ title = '', children, ...props }: ISection) => (
  <S.DashboardSection>
    {typeof title === 'string' ? <S.DashboardSectionTitle as={(props as ISectionAsText).title_as}>{title}</S.DashboardSectionTitle> : title}
    {children}
  </S.DashboardSection>
)

export default Section