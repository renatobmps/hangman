import Form from "@/common/components/will_be_delete_home/form";

const Playing = async () => {
  const apiRequest = await fetch(process.env.API_HOST, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query {
        getUsers {
          id
          name
        }
      }`
    })
  })

  if (!apiRequest.ok) {
    throw new Error(`Error: ${apiRequest.status}`)
  }

  const list: { data?: { getUsers?: Array<{ id?: string, name?: string }> } } = await apiRequest.json();

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
}

export default Playing