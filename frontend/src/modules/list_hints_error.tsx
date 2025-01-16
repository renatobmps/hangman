'use client'
import Button from "@/common/components/button";
import './list_hints_error.css'
import { useEffect } from "react";
import IPageError from "@/common/interfaces/page_error";

const ListHintsError = ({ reset = () => window.location.reload(), error }: IPageError) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="hints__error">
      <div className="hints__error-description">
        <h2>Something went wrong!</h2>
        {error.message && <p>{error.message}</p>}
      </div>
      <Button.Primary onClick={reset}>Try again</Button.Primary>
    </div>
  )
}

export default ListHintsError;
