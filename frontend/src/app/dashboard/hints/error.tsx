'use client'
import IPageError from '@/common/interfaces/page_error'
import ListHintsError from '@/modules/list_hints_error'

const Error = (props: IPageError) => (
  <ListHintsError {...props} />
)

export default Error;
