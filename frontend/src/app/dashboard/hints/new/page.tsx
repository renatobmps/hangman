import NewHint from "@/modules/new_hint";

const Page = async () => {
  const request = await fetch(process.env.API_HOST, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          getWords {
            id
            text
            hints {
              text
            }
          }
        }
    `})
  });

  const data = await request.json() as {
    data: {
      getWords: Array<{
        id?: string;
        text?: string;
        hints?: Array<{ text?: string; }>
      }>
    }
  };


  return (
    <NewHint wordList={data.data.getWords.map(word => ({
      id: word.id,
      text: word.text,
      hints: word.hints.map(hint => ({
        text: hint.text,
      })),
    }))} />
  )
}

export default Page