import { HTMLAttributes } from "react";

export interface IHint {
  isLoading?: boolean,
  title?: string,
  isActive?: boolean,
  total_words?: number,
}

export interface ILoading {
  delay_ms?: number
}

export interface IError {
  message?: string;
  reset(): void;
}

export interface ICta extends HTMLAttributes<HTMLButtonElement> { }