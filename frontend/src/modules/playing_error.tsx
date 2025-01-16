import IPageError from "@/common/interfaces/page_error";

const PlayingError = ({ reset = () => window.location.reload(), error }: IPageError) => {
  const env = { ...process.env };
  return (
    <main>
      <pre>{JSON.stringify(env, null, 2)}</pre>
      <h1>Error</h1>

      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </main>
  )
}

export default PlayingError;