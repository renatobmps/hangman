'use client'
import Hints from "..";
import { IError } from "../hints.interfaces";
import '../style.css';

const Error = ({ message, reset = () => window.location.reload() }: IError) => (
  <div className="hints__error">
    <div className="hints__error-description">
      <h2>Something went wrong!</h2>
      {message &&
        <p>{message}</p>
      }
    </div>
    <Hints.Cta onClick={reset}>Try again</Hints.Cta>
  </div>
)

export default Error;
