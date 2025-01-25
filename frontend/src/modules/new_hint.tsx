'use client'
import { FormEvent, useRef, useState } from "react";
import Form from "../common/components/form";
import INewHint from "@/common/interfaces/module_new_hint";

export default function NewHint({ wordList = [] }: INewHint) {
  const nameRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);
  const [selectedWord, setWord] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)

    try {
      console.log('env', process.env.API_HOST)
      const request = await fetch("http://localhost:4000/graphql", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation {
              createHint(text: "${nameRef.current.value}", isActive: ${activeRef.current.checked}${
                typeof selectedWord === 'undefined' ? '' : `, words: "selectedWord"`}) {
                id
              }
            }
          `
        })
      })

      if (!request.ok) {
        throw new Error(`Request failed with error ${request.status}`);
      }

      window.location.href = `/dashboard/hints?search=${nameRef.current.value}`;
    } catch (error) {
      console.error(error);
      alert(error.message ?? 'Unexpected error')
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Title>Adding new hint</Form.Title>
      <Form.Line>
        <Form.TextInput ref={nameRef} disabled={isLoading}>Name</Form.TextInput>
        <Form.CheckerInput checked disabled={isLoading} ref={activeRef}>
          <strong>Activated?</strong>
        </Form.CheckerInput>
      </Form.Line>
      {
        !!wordList.length && (
          <Form.InputWrapper>
            <Form.SubTitle>Do you want to start it with some word?</Form.SubTitle>
            <Form.InputWrapper>
              {
                wordList.map((word, i) => (
                  <Form.RadioInput
                    key={`word_${word.id ?? ''}`}
                    inputName="word"
                    strongText
                    disabled={isLoading}
                    onClick={(e) => e.currentTarget.checked && setWord(undefined)}
                    onChange={(e) => setWord(e.currentTarget.value)}
                    checked={word.id === selectedWord}
                    text={word.text}
                    value={word.id}
                  />
                ))
              }
            </Form.InputWrapper>
          </Form.InputWrapper>
        )
      }
      <Form.Submit disabled={isLoading}>Save</Form.Submit>
    </Form.Root >
  )
}