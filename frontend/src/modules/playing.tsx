'use client'

import { useRef } from "react";

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputRef.current && inputRef.current.value.length >= 3) {
      const apiRequest = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `mutation {
            createUser(username: "${inputRef.current.value}", password: "${inputRef.current.value}")
          }`
        })
      })

      if (!apiRequest.ok) {
        throw new Error(`Error: ${apiRequest.status}`)
      }

      const newUser = await apiRequest.json();

      console.log({ newUser });

      window.location.reload();
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ paddingBlock: '1rem' }}>
      <label htmlFor="name">
        <strong>Name</strong>
        <input type="text" id="name" ref={inputRef} autoFocus />
      </label>

      <button type="submit">Save</button>
    </form>
  )
}

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