'use client'
import IPageError from "@/common/interfaces/page_error";
import PlayingError from "@/modules/playing_error";

const Error = (props: IPageError) => (
  <PlayingError {...props} />
)

export default Error;