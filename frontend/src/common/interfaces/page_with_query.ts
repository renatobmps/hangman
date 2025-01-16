export default interface IPageWithQuery {
  searchParams: Promise<Record<string, (string | undefined)>>
}