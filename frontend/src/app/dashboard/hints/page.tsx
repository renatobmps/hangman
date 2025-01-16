import ListHints from "@/modules/list_hints";
import IPageWithQuery from "@/common/interfaces/page_with_query";

const Page = async (props: IPageWithQuery) => (
  <ListHints {...props} />
)

export default Page;