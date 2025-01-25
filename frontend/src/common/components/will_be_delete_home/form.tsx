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

export default Form;