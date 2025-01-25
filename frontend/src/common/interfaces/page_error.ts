export default interface IPageError {
  error: Error & { digest?: string }
  reset?: () => void
}