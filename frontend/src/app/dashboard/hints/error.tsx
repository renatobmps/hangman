'use client'
import Hints from '@/app/dashboard/hints/components'
import { useEffect } from 'react'

interface IError {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({
  error,
  reset,
}: IError) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Hints.Error reset={reset} message={error.message} />
  )
}

export default Error;
