import Hints from "@/common/components/hints";
import IPageWithQuery from "@/common/interfaces/page_with_query";

const ListHints = async ({ searchParams }: IPageWithQuery) => {
  const { search } = await searchParams;

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

  const filteredData = !search ? data : (() => {
    const copyData = data;

    copyData.data.getHints = copyData.data.getHints.filter(hint => {
      return hint.text === null || (
        hint.text.toLocaleLowerCase().includes(
          search?.toLocaleLowerCase()
        )
      )
    });

    return copyData;
  })()

  return (
    <Hints.Root>
      <Hints.HeaderActions>
        <Hints.Navigation />
        <Hints.Cta href="/dashboard/hints/new">Add hint</Hints.Cta>
      </Hints.HeaderActions>
      {!filteredData.data.getHints.length && (
        <p>There are no registered hints.</p>
      )}
      {!!filteredData.data.getHints.length && (
        <Hints.HintList>
          {
            filteredData.data.getHints.toSorted((a, b) => {
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
      )}
    </Hints.Root>
  )
}

export default ListHints