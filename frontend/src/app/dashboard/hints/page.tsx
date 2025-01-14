import Hints from "./components";

const Page = async () => {
  const request = await fetch(process.env.API_HOST, {
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    body: JSON.stringify({
      query: `
        query {
          getHints {
            text
            is_activated
            total_words
          }
        }
      `
    }),
  });

  const data = await request.json() as {
    data: {
      getHints?: Array<{
        text?: string,
        is_activated?: boolean,
        total_words?: number,
      }>
    }
  };

  return (
    <Hints.Page>
      <Hints.Top />
      <Hints.Root>
        <Hints.HeaderActions>
          <Hints.Navigation />
          <Hints.Cta />
        </Hints.HeaderActions>
        <Hints.HintList>
          {
            data.data.getHints.toSorted((a, b) => {
              if (a.text < b.text) return -1;
              return 0;
            }).map(hint => (
              <Hints.Hint
                title={hint.text}
                isActive={hint.is_activated}
                total_words={hint.total_words}
              />
            ))
          }
        </Hints.HintList>
      </Hints.Root>
    </Hints.Page>
  )
}

export default Page;