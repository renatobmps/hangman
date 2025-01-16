import { ISubmit } from '../@types'
import Button from '@/common/components/button';

const Submit = ({ children = 'submit' }: ISubmit) => (
  <Button.Primary type='submit'>{children}</Button.Primary>
)

export default Submit