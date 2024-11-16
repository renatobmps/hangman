import Form from "./components/form";


const Page = async () => {
  try {
    const apiRequest = await fetch(process.env.API_HOST, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `query {
          getUsers {
            id
            name
          }
        }`
      })
    })

    console.log({ apiRequest })

    if (!apiRequest.ok) {
      throw new Error(`Error: ${apiRequest.status}`)
    }

    const list: { data?: { getUsers?: Array<{ id?: string, name?: string }> } } = await apiRequest.json();
    console.log({ list })

    return (

      <main style={{ paddingInline: '1rem' }}>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
        <h1 style={{ paddingBlock: '0.5rem 1rem' }}>First page</h1>
        <Form />
        {
          list?.data?.getUsers?.map(user => (
            <li key={`register-${user.id}`} style={{ display: 'flex', alignContent: 'center', paddingBlock: '1rem' }}>
              <strong>{user.id}</strong>: <p>{user.name}</p>
            </li>
          ))
        }
      </main>
    )
  } catch (e) {
    const error = e as Error;
    console.error(error);

    return (
      <main>
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
        <h1>Error</h1>

        <p>{error.message}</p>
      </main>
    )
  }
}

export default Page;